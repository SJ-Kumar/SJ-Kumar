# Import necessary libraries for Git, Jinja2, and email
import git
from jinja2 import Environment, FileSystemLoader
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib

# Fetch content from Git repository
def fetch_git_content(repository_url):
    # Clone the Git repository to a local directory
    local_path = 'C:/10-Practice/Others/test'
   #  local_path = '/path/to/local/repo'  # Update with your desired local path
    git.Repo.clone_from(repository_url, local_path)
    
    # Get the latest commit and fetch content
    repo = git.Repo(local_path)
    latest_commit = repo.head.commit
    
    blob = latest_commit.tree.blobs[0]
    content = blob.data_stream.read().decode('utf-8')
   
   # latest_commit = repo.head.commit
   # content = latest_commit.tree.blobs[0].content.decode('utf-8')
    
    return content

# Generate newsletter content using Jinja2 template engine
def generate_newsletter_content(content):
    # Load Jinja2 templates
    
    templates_dir = '/template'  # Update with your templates directory
    print (templates_dir)
    env = Environment(loader=FileSystemLoader(templates_dir))
    print (env)
    template = env.get_template('newsletter_template.html')  # Update with your newsletter template file
    print (template)
    # Render the template with the fetched content
    rendered_content = template.render(content=content)
    
    return rendered_content

# Send newsletters to selective Microsoft Teams logged-in office employees
def send_newsletters(newsletter_content, recipients):
    # Set up SMTP connection
    smtp_server = 'smtp.gmail.com'  # Update with your SMTP server details
    smtp_port = 587
    smtp_username = 'jayanthkumar597@gmail.com'  # Update with your email address
    smtp_password = 'Sureshraina'  # Update with your email password
    smtp_tls = True
    
    # Create multipart email message
    msg = MIMEMultipart()
    msg['From'] = smtp_username
    msg['Subject'] = 'Weekly Newsletter'
    
    # Attach newsletter content as plain text
    msg.attach(MIMEText(newsletter_content, 'plain'))
    
    # Convert recipients list to comma-separated string
    recipients_str = ', '.join(recipients)
    
    # Set email recipients
    msg['To'] = recipients_str
    
    # Send email using SMTP
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls() if smtp_tls else None
        server.login(smtp_username, smtp_password)
        server.sendmail(smtp_username, recipients, msg.as_string())

# Example usage
repository_url = 'https://github.com/SJ-Kumar/Pickling-in-Python.git'  # Update with your Git repository URL
content = fetch_git_content(repository_url)
newsletter_content = generate_newsletter_content(content)
recipients = ['sureshbabuv@gmail.com', 'employee2@example.com']  # Update with selective recipients
send_newsletters(newsletter_content, recipients)
