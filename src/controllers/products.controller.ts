import {Request, Response} from "express"
import productsService from "../services/products.service";

const findAll = (req: Request, res: Response)=>{

const products = productsService.findAll()

 res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: products,
    });
}

const findById = (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const product = productsService.findById(parseInt(id))

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: product,
    });
}

const create = (req: Request, res: Response) =>{
    const product = productsService.create(req.body)
    
    res.status(201).json({
        statusCode: 201,
        message: 'Product created successfully!',
        data: product,
    });
}

const updateById = (req: Request, res: Response) =>{
    const { id } = req.params;

    const product = productsService.updateById(parseInt(id),req.body)
    
    res.status(200).json({
        statusCode: 200,
        message: 'Product updated successfully',
        data: product,
    });
}

const deleteById = (req: Request, res: Response) => {
    const { id } = req.params;

    const products = productsService.deleteById(parseInt(id))
   
    res.status(200).json({
        statusCode: 200,
        message: 'Product deleted successfully',
        data: products
    });
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}