import express from 'express';
import { getProduct } from '../controllers/product';

const productRouter = express.Router();

productRouter.get('/products',getProduct)

export default productRouter;