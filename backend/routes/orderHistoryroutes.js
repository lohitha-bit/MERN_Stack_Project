import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderHistoryRouter = express.Router();
   
orderHistoryRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    console.log("inside mine");
    const orders = await Order.find({ user: req.user._id});
    res.send(orders);
  })
);



export default orderHistoryRouter;