import cors from 'cors';
import express from 'express';
import { getDbConnection } from './utils/dbConnect';

const app = express();

/*------------ Middlewares --------------*/
app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
    try {
        const database = getDbConnection(); // Access the database instance directly from the request object
        (req as any).db = database; // Attach the database instance to the request object and (req as any) is used to avoid typescript error
        next();
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).send({ status: 'error', message: 'Server Error' });
    }
});

/*------------ Home Routes --------------*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


/* Import all Routes */
import userRoutes from './routes/v1/userRouter';

/*--------------- Route MiddleWare ---------------*/
app.use('/api/v1', userRoutes)


export default app;