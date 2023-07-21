const express = require('express');
const cors = require('cors');
const axios = require('axios');
// Add the Python shell module import
const { PythonShell } = require('python-shell');
const path = require('path'); // Add this line to handle file paths

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Load the saved model
const modelPath = path.join(__dirname, 'healthcare_model.pkl'); // Assuming the model file is named healthcare_model.pkl

app.post('/recommend', async (req, res) => {
    const { userInput } = req.body;

    try {
        // Send user input to the Python script for prediction
        const pyShell = new PythonShell(path.join(__dirname, 'predict_script.py'), {
            pythonPath: 'C:\Users\PatzPaul\AppData\Local\Microsoft\WindowsApps\python3.exe', // Replace with the actual Python 3 executable path
            pythonOptions: ['-u'],
            args: [JSON.stringify(userInput)],
        });
        
        let predictions = [];
        pyShell.on('message', (message) => {
            // Collect the messages from the Python script
            predictions.push(message);
        });

        // Handle the end event properly to ensure the response is sent after Python script execution is complete
        pyShell.end((err) => {
            if (err) {
                console.log('Error during Python script execution:', err);
                res.status(500).json({ error: 'An error occurred during prediction.' });
            } else {
                console.log('Predictions:', predictions);
                // Send the predictions back to the frontend
                res.status(200).json({ predictions });
            }
        });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;

    debugger;
    try {
        const response = await axios.put(
            'https://cors-anywhere.herokuapp.com/https://api.chatengine.io/users/',
            {
                username: username,
                secret: username,
                first_name: username,
            },
            { headers: { 'private-key': '0876a8b4-08eb-4654-87fb-3c3da2a922ce' } }
        );
        if (response) {
            return res.status(response.status).json(response.data);
        } else {
            return res
                .status(500)
                .json({ message: 'No response from ChatEngine' });
        }
    } catch (error) {
        error = JSON.parse(JSON.stringify(error));
        if (error.response) {
            return res
                .status(error.response.status)
                .json(error.response.data);
        } else {
            return res.status(500).json({ message: 'Something went wrong' });
        }
    }
});

const port = 3001;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
