import express from 'express'
import { CreatePizza, DeletePizzaById, GetPizzaById, UpdatePizzaById, getAllPizza } from '../controllers/PizzaController.js';
const pizzaRoute = express.Router();


//!create
pizzaRoute.post("/create", CreatePizza);

//!read
pizzaRoute.get("/getPizza",getAllPizza);
//!readSingleData
pizzaRoute.get("/singlePizza/:id", GetPizzaById);
//!update
pizzaRoute.put('/updatePizza/:id', UpdatePizzaById);
//!delete
pizzaRoute.delete('/delete/:id', DeletePizzaById);


export default pizzaRoute;