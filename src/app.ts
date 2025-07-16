import express, {Request, Response, NextFunction} from "express";
import categoriesRouter from './routes/v1/categories.route';
import brandsRouter from './routes/v1/brands.route';
import productsRouter from './routes/v1/products.route';
import customersRouter from './routes/v1/customers.route';
import staffsRouter from './routes/v1/staffs.route';
import createError from 'http-errors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Bài tập CRUD với RESTful API',
    });
});

app.use('/api/v1', categoriesRouter);
app.use('/api/v1', brandsRouter);
app.use('/api/v1', productsRouter);
app.use('/api/v1', customersRouter);
app.use('/api/v1', staffsRouter);

app.use((req, res, next)=>{
    next(createError (404, 'NOT Found'));
})

app.use((err: any, req: Request, res: Response, next: NextFunction)=>{
    res.status(err.status || 500);
    res.json({
        statusCode: err.status || 500,
        message: err.status || 'Internal Server Error',
    });
});

export default app;