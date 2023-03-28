import express from 'express';
import { createDevice, getDevice, getDeviceId, removeDevice, updateDevice } from '../controllers/product';


const deviceRouter = express.Router();

deviceRouter.get('/device',getDevice)
deviceRouter.get('/device/:id',getDeviceId)
deviceRouter.post('/device',createDevice)
deviceRouter.delete('/device/:id',removeDevice)
deviceRouter.put('/device/:id',updateDevice)





export default deviceRouter;