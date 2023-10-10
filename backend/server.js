import  express  from "express";
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from "./routes/seedRoutes.js";
import productRouter from './routes/productRoutes.js';
import userRouter from "./routes/userRoutes.js";
import orderRouter from './routes/orderRoutes.js';
import orderHistoryRouter from "./routes/orderHistoryroutes.js";


dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app =express();

app.use(express.json());//form data converted to json object
app.use(express.urlencoded({ extended: true }));

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});


app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

//to handle error in expressAsyncHandler
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/orderHistory', orderHistoryRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/testapp/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/testapp/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


const port = process.env.PORT || 5000;//use default port or 5000
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});