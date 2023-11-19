import express from 'express';
import cors from 'cors';
import Axios from 'axios';

// Create Express application
const app = express();
app.use(cors());
app.use(express.json());

// Create a GET route
// /message is an endpoint that returns JSON object with message
app.get('/message', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// endpoint to generate an excuse
app.get('/excuse', async (req, res) => {
    try {
        const { category } = req.query;
    
        if (!category) {
            return res.status(400).json({ error: 'Category is required '});
        }
    
        const apiURL = `https://excuser-three.vercel.app/v1/excuse/${category}`;
        const response = await Axios.get(apiURL);

        console.log(response.data);  // Display the response data
        res.json(response.data);     // Send the response data to the client

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});