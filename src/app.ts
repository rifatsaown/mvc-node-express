import cors from 'cors';
import express from 'express';

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});



export default app;