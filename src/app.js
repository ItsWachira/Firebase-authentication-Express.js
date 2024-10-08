const express = require('express');
const router = require("./routes");
const cors = require("cors");
const cookieParser = require('cookie-parser');
require("dotenv").config();

const SERVER_PORT = process.env.SERVER_PORT || 8080;
const SERVER_HOST = process.env.SERVER_HOST || '0.0.0.0';

const app = express();

// Apply CORS middleware before the router
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'], // Allow access from localhost:3000 and localhost:5173
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true  // Allow credentials like cookies or auth headers
}));

// Parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Use your router
app.use(router);

// Enable pre-flight requests for all routes (if necessary)
app.options('*', cors());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server, binding to both the host and port
app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Listening on ${SERVER_HOST}:${SERVER_PORT}`);
});
