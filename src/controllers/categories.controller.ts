import {Request, Response} from "express"
import categoriesService from "../services/categories.service";

const findAll = async (req: Request, res: Response)=>{

const categories = await categoriesService.findAll()

 res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: categories,
    });
}

const findById = async (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const category = await categoriesService.findById(parseInt(id))

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: category,
    });
}

const create = async (req: Request, res: Response) =>{
    const category = await categoriesService.create(req.body)
    
    res.status(201).json({
        statusCode: 201,
        message: 'Category created successfully!',
        data: category,
    });
}

const updateById = async (req: Request, res: Response) =>{
    const { id } = req.params;

    const category = await categoriesService.updateById(parseInt(id),req.body)
    
    res.status(200).json({
        statusCode: 200,
        message: 'Category updated successfully',
        data: category,
    });
}

const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const categories = await categoriesService.deleteById(parseInt(id))
   
    res.status(200).json({
        statusCode: 200,
        message: 'Category deleted successfully',
        data: categories
    });
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}