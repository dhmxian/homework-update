import {Request, Response} from "express"
import brandsService from "../services/brands.service";

const findAll = (req: Request, res: Response)=>{

const brands = brandsService.findAll()

 res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: brands,
    });
}

const findById = (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const brand = brandsService.findById(parseInt(id))

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: brand,
    });
}

const create = (req: Request, res: Response) =>{
    const brand = brandsService.create(req.body)
    
    res.status(201).json({
        statusCode: 201,
        message: 'Brand created successfully!',
        data: brand,
    });
}

const updateById = (req: Request, res: Response) =>{
    const { id } = req.params;

    const brand = brandsService.updateById(parseInt(id),req.body)
    
    res.status(200).json({
        statusCode: 200,
        message: 'Brand updated successfully',
        data: brand,
    });
}

const deleteById = (req: Request, res: Response) => {
    const { id } = req.params;

    const brands = brandsService.deleteById(parseInt(id))
   
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