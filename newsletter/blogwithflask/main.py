from flask import Flask, render_template, redirect, url_for, request, flash, abort
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import NoResultFound
from sqlalchemy import  ForeignKey
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField
from wtforms.validators import DataRequired, URL
from flask_ckeditor import CKEditor
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from functools import wraps
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
import datetime


today = datetime.datetime.now()
date = today.strftime("%B %d, %Y")
Base = declarative_base()
login_manager = LoginManager()
app = Flask(__name__)
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR6b'
Bootstrap(app)
ckeditor = CKEditor(app)
login_manager.init_app(app)

##CONNECT TO DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)



##CONFIGURE TABLE
class User(UserMixin, db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(100))
    posts = relationship("BlogPost", back_populates="author")
    comments = relationship("Comment", back_populates="comment_author")


class BlogPost(db.Model):
    __tablename__ = "blog_posts"
    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    author = relationship("User", back_populates="posts")
    title = db.Column(db.String(250), unique=True, nullable=False)
    subtitle = db.Column(db.String(250), nullable=False)
    date = db.Column(db.String(250), nullable=False)
    body = db.Column(db.Text, nullable=False)
    img_url = db.Column(db.String(250), nullable=False)
    comments = relationship("Comment", back_populates="parent_post")


class Comment(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey("blog_posts.id"))
    author_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    parent_post = relationship("BlogPost", back_populates="comments")
    comment_author = relationship("User", back_populates="comments")
    text = db.Column(db.Text, nullable=False)


with app.app_context():
    db.create_all()


##WTForm
class CreatePostForm(FlaskForm):
    title = StringField("Blog Post Title", validators=[DataRequired()])
    subtitle = StringField("Subtitle", validators=[DataRequired()])
    author = StringField("Your Name", validators=[DataRequired()])
    img_url = StringField("Blog Image URL", validators=[DataRequired(), URL()])
    body = StringField("Blog Content")
    submit = SubmitField("Submit Post")


class RegisterForm(FlaskForm):
    email = StringField("Email ID", validators=[DataRequired()])
    password = PasswordField("Password", validators=[DataRequired()])
    name = StringField("Your Name", validators=[DataRequired()])
    submit = SubmitField("Submit Post")


class LoginForm(FlaskForm):
    email = StringField("Email ID", validators=[DataRequired()])
    password = PasswordField("Password", validators=[DataRequired()])
    submit = SubmitField("Submit Post")

class CommentForm(FlaskForm):
    comment_text = StringField("Give your comment", validators=[DataRequired()])
    submit = SubmitField("Submit Post")


with app.app_context():
    db.create_all()





@login_manager.user_loader
def load_user(user_id):
    user = User.query.get(user_id)
    return user

#Create admin-only decorator
def admin_only(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        #If id is not 1 then return abort with 403 error
        if current_user.id != 1:
            return abort(403)
        #Otherwise continue with the route function
        return f(*args, **kwargs)
    return decorated_function


@app.route('/', methods=["GET"])
def get_all_posts():
    posts = db.session.execute(db.select(BlogPost).order_by(BlogPost.id)).scalars()
    return render_template("index.html", all_posts=posts, logged_in=current_user.is_authenticated)


@app.route("/post/<int:index>", methods=["GET", "POST"])
def show_post(index):
    form = CommentForm()
    requested_post = db.session.execute(db.select(BlogPost).filter_by(id=index)).scalar_one()

    if form.validate_on_submit():
        comment_text = request.form.get('ckeditor')
        if not current_user.is_authenticated:
            flash("You need to login or register to comment.")
            return redirect(url_for("login"))

        new_comment = Comment(
            text=form.comment_text.data,
            comment_author=current_user,
            parent_post=requested_post
        )
        db.session.add(new_comment)
        db.session.commit()

    return render_template("post.html", post=requested_post, logged_in=current_user.is_authenticated, form=form)


@app.route('/new_post', methods=["POST", "GET"])
@admin_only
def new_post():
    form = CreatePostForm()
    if form.validate_on_submit():
        new_blog = BlogPost(
            title=form.title.data,
            subtitle=form.subtitle.data,
            date=date,
            body=request.form.get('ckeditor'),
            author=current_user,
            img_url=form.img_url.data

        )
        db.session.add(new_blog)
        db.session.commit()
        return redirect(url_for('get_all_posts'))

    return render_template("make-post.html", form=form, edit=False, logged_in=current_user.is_authenticated)


@app.route("/edit_post/<int:post_id>", methods=["GET", "POST"])
@admin_only
def edit_post(post_id):
    post = db.session.execute(db.select(BlogPost).filter_by(id=post_id)).scalar_one()
    edit_form = CreatePostForm(
        title=post.title,
        subtitle=post.subtitle,
        date=post.date,
        body=post.body,
        author=post.author,
        img_url=post.img_url

    )
    article_body = post.body
    if edit_form.validate_on_submit():
        post.title = request.form['title']
        post.subtitle = request.form['subtitle']
        post.author = request.form['author']
        post.img_url = request.form['img_url']
        post.body = request.form['body']
        db.session.commit()

        return redirect(url_for('show_post', index=post_id))

    return render_template("make-post.html", form=edit_form, edit=True, post_id=post_id, article_body=article_body, logged_in=current_user.is_authenticated)


@app.route('/delete/<int:post_id>')
@admin_only
def delete(post_id):
    post = db.session.execute(db.select(BlogPost).filter_by(id=post_id)).scalar_one()
    db.session.delete(post)
    db.session.commit()

    return redirect(url_for('get_all_posts'))


@app.route('/register', methods=["POST", "GET"])
def register_user():
    form = RegisterForm()
    if form.validate_on_submit():
        name = request.form.get("name")
        email = request.form.get("email")
        try:
            user = db.session.execute(db.select(User).filter_by(email=email)).scalar_one()
            flash('Email already registered. Please Login')
            return redirect(url_for('login'))

        except NoResultFound:
            password = generate_password_hash(request.form.get("password"), method='pbkdf2:sha256', salt_length=8)
            user = User(name=name, email=email, password=password)
            db.session.add(user)
            db.session.commit()
            return "Successfully registered"

    return render_template("register.html", form=form, logged_in=current_user.is_authenticated)


@app.route('/login', methods=["POST", "GET"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        email = request.form["email"]
        password = request.form["password"]
        try:
            user = db.session.execute(db.select(User).filter_by(email=email)).scalar_one()
            if check_password_hash(user.password, password):
                login_user(user)
                flash('Logged in successfully.')
                return redirect(url_for('get_all_posts'))
            else:
                flash('Incorrect password')
                return redirect(url_for('login', form=form))

        except NoResultFound:
            flash('No such email in the database')
            return redirect(url_for('register_user'))

    return render_template("login.html", form=form, logged_in=current_user.is_authenticated)



@app.route("/logout", methods=["GET"])
@login_required
def logout():
    logout_user()
    return redirect(url_for('get_all_posts'))


@app.route("/about")
def about():
    return render_template("about.html", logged_in=current_user.is_authenticated)


@app.route("/contact")
def contact():
    return render_template("contact.html", logged_in=current_user.is_authenticated)


if __name__ == "__main__":
    app.run(debug=True)
