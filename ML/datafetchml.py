import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.metrics import roc_auc_score
from xgboost import XGBClassifier
import os

# Load the data
# file_path = os.path.join(os.getcwd(), 'data', 'Customers.csv')
# customers_df = pd.read_csv(file_path)

# file_path = r"C:\10-Practice\SJ-Kumar.github.io\ML\data"
customers_df = pd.read_csv("C:\10-Practice\SJ-Kumar.github.io\ML\data", header = None)
# customers_df = pd.read_csv(file_path)

# customers_df = pd.read_csv('Customers.csv')

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    customers_df.drop('Purchased', axis=1), 
    customers_df['Purchased'], 
    test_size=0.2, 
    random_state=123
)

# Define the preprocessing pipeline
numeric_transformer = Pipeline(steps=[
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, customers_df.select_dtypes(include=['int64', 'float64']).columns),
        ('cat', categorical_transformer, customers_df.select_dtypes(include=['object']).columns)
    ])

# Define the XGBoost model
xgb_model = XGBClassifier(
    n_estimators=500,
    max_depth=3,
    min_child_weight=5,
    learning_rate=0.1,
    subsample=0.8,
    colsample_bytree=0.5,
    objective='binary:logistic',
    random_state=123
)

# Combine the preprocessing pipeline and the model into a single pipeline
clf = Pipeline(steps=[('preprocessor', preprocessor), ('xgb', xgb_model)])

# Fit the model to the training data
clf.fit(X_train, y_train)

# Make predictions on the test data
y_pred = clf.predict(X_test)

# Calculate ROC AUC score
roc_auc = roc_auc_score(y_test, y_pred)
print("ROC AUC score:", roc_auc)