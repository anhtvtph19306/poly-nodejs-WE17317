import express from 'express';
import { createDevice } from '../controllers/product';


const deviceRouter = express.Router();

deviceRouter.post('/device',createDevice)




export default deviceRouter;