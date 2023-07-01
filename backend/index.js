const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

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
