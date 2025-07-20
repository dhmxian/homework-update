import {Request, Response} from "express"
import productsService from "../services/products.service";

const findAll = async (req: Request, res: Response)=>{

const products = await productsService.findAll()

 res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: products,
    });
}

const findById = async (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const product = await productsService.findById(parseInt(id))

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: product,
    });
}

const create = async (req: Request, res: Response) =>{
    const product = await productsService.create(req.body)
    
    res.status(201).json({
        statusCode: 201,
        message: 'Product created successfully!',
        data: product,
    });
}

const updateById = async (req: Request, res: Response) =>{
    const { id } = req.params;

    const product = await productsService.updateById(parseInt(id),req.body)
    
    res.status(200).json({
        statusCode: 200,
        message: 'Product updated successfully',
        data: product,
    });
}

const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const products = await productsService.deleteById(parseInt(id))
   
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