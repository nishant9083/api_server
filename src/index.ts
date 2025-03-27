import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import userRouter from './routes/person.routes';
dotenv.config();

const app = express();

app.use(express.json()); 

connectDB().then(() => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {  
  res.send(`Welcome to API Server!`);
});

app.use('/api/users', userRouter);

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
