const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    debugger;
    try {
        const response = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "0876a8b4-08eb-4654-87fb-3c3da2a922ce" } }
        );
        // check if response is defined
        if (response) {
            return res.status(response.status).json(response.data);
        } else {
            // handle the case when response is undefined
            return res.status(500).json({ message: "No response from chatengine" });
        }
    } catch (error) {
        // serialize and parse the error object
        error = JSON.parse(JSON.stringify(error));
        // check if error.response is defined
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        } else {
            // handle the case when error.response is undefined
            return res.status(500).json({ message: "Something went wrong" });
        }
    }
});

// define a port number
const port = 3001;

// pass a callback function as the second argument to app.listen()
app.listen(port, () => {
    // use console.log() to print a message with the port number
    console.log(`Server listening on port ${port}`);
});

console.log("listening on port 3001")
//return res.json({username : username, secret: "sha256..."});
//0876a8b4-08eb-4654-87fb-3c3da2a922ce
