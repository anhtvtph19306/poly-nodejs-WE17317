import express from 'express';
import { getProduct, getProductId } from '../controllers/product';

const productRouter = express.Router();

productRouter.get('/products',getProduct)
productRouter.get('/products/:id',getProductId)


export default productRouter;