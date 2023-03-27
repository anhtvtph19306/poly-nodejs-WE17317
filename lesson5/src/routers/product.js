import express from 'express';
import { createProduct, getProduct, getProductId } from '../controllers/product';

const productRouter = express.Router();

productRouter.get('/products',getProduct)
productRouter.get('/products/:id',getProductId)
productRouter.post('/products/',createProduct)



export default productRouter;