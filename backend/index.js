import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import DatabaseConnection from './utils/DatabaseConnection.js';
import pizzaRoute from './routes/PizzaRoute.js';

//! Initialize Express app
const app = express();

//! Connect to the database
DatabaseConnection();

//! Load environment variables
dotenv.config();

//! Middleware for CORS
app.use(cors({
    origin: 'http://!localhost:3000', //! Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'FETCH'], //! Allow only specified methods
    allowedHeaders: ['Content-Type'], //! Allow only specified headers
}));

//! Define the port
const port = process.env.PORT || 5000;

//! Middleware to parse JSON requests
app.use(bodyParser.json());

//! Routes
app.use("/api", pizzaRoute);

//! Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
