import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRouter from './routes/user.route.js';




dotenv.config();
const app = express();

app.use('/api/users', userRouter);
// app.use('/api/products', productRouter);
// app.use('/api/orders', orderRouter);
// app.use('/api/upload', uploadRouter);
// app.use('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));
// app.get('/', (req, res) => { 
//     res.send('Server is ready'); 
// });


//midlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( cookieParser() );
const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    };
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on ${PORT}`);
});
