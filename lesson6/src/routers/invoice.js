import express from "express";
import { create, getAll } from "../controllers/invoice";

const invoiceRouter = express.Router();

invoiceRouter.post("/invoice", create);
invoiceRouter.get("/invoice", getAll);


export default invoiceRouter;