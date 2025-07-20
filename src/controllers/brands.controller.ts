import {Request, Response} from "express"
import brandsService from "../services/brands.service";

const findAll = async (req: Request, res: Response)=>{

const brands = await brandsService.findAll()

 res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: brands,
    });
}

const findById = async (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const brand = await brandsService.findById(parseInt(id))

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: brand,
    });
}

const create = async (req: Request, res: Response) =>{
    const brand = await brandsService.create(req.body)
    
    res.status(201).json({
        statusCode: 201,
        message: 'Brand created successfully!',
        data: brand,
    });
}

const updateById = async (req: Request, res: Response) =>{
    const { id } = req.params;

    const brand = await brandsService.updateById(parseInt(id),req.body)
    
    res.status(200).json({
        statusCode: 200,
        message: 'Brand updated successfully',
        data: brand,
    });
}

const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const brands = await brandsService.deleteById(parseInt(id))
   
    res.status(200).json({
        statusCode: 200,
        message: 'Brand deleted successfully',
        data: brands
    });
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}