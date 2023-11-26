import cors from 'cors';
import Axios from 'axios';
import express from 'express';
import admin from 'firebase-admin';
import { Firestore } from '@google-cloud/firestore/build/src/index.js';
import serviceAccount from './creds.json'  assert { type: "json" };


// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://crud-node-firebase-5bd75.firebaseio.com/`
});

const firestore = admin.firestore();


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

// Route to get documents from a Firestore collection
app.get('/getExcuses', async (req, res) => {
    try {
        const collectionName = 'excuses';

        // Fetch all documents from the "excuses" collection
        const querySnapshot = await firestore.collection(collectionName).get();

        // Extract document data
        const documents = querySnapshot.docs.map((doc) => doc.data());

        res.json({ documents });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    };
});

// Route to push documents to a Firestore collection
app.post('/putExcuse', async (req, res) => {
    try {
        const { excuse, category } = req.body;

        if(!excuse) {
            return res.status(400).json({ error: 'Excuse is required' });
        }

        const collectionName = 'excuses';

        // Add the excuse to the "excuses" collection in Firestore
        await firestore.collection(collectionName).add({
            category,
            excuse
        });

        res.json({ message: 'Excuse added to Firestore succcessfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error '});
    }
})

// Start server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});