#!/usr/bin/env python3

import joblib
import sys
from sklearn.feature_extraction.text import TfidfVectorizer

# Load the trained model and vectorizer
model_path = 'healthcare_model.pkl'  # Update this with the actual path to your saved model
vectorizer_path = 'tfidf_vectorizer.pkl'  # Update this with the actual path to your saved vectorizer
model = joblib.load(model_path)
tfidf_vectorizer = joblib.load(vectorizer_path)

# Get the user input from the command-line arguments
user_input = sys.argv[1]

# Preprocess the user input and convert it to a 2D array
user_input = [user_input]  # Wrap the input in a list to create a 2D array with one row
user_input = tfidf_vectorizer.transform(user_input)

# Make predictions using the model
predictions = model.predict(user_input)

# Convert the predictions to a list and print the results
predictions = predictions.tolist()
print(predictions)