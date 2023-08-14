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
        console.log('Dtabase Instance Successfully Attached to the Request Object');
        next();
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).send({ status: 'error', message: 'Server Error' });
    }
});


/*--------------- Routes ---------------*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});



export default app;