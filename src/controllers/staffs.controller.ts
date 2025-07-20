import {Request, Response} from "express"
import staffsService from "../services/staffs.service";

const findAll = async (req: Request, res: Response)=>{

const staffs = await staffsService.findAll()

 res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: staffs,
    });
}

const findById = async (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const staff = await staffsService.findById(parseInt(id))

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: staff,
    });
}

const create = async (req: Request, res: Response) =>{
    const staff = await staffsService.create(req.body)
    
    res.status(201).json({
        statusCode: 201,
        message: 'Staff created successfully!',
        data: staff,
    });
}

const updateById = async (req: Request, res: Response) =>{
    const { id } = req.params;

    const staff = await staffsService.updateById(parseInt(id),req.body)
    
    res.status(200).json({
        statusCode: 200,
        message: 'Staff updated successfully',
        data: staff,
    });
}

const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const staffs = await staffsService.deleteById(parseInt(id))
   
    res.status(200).json({
        statusCode: 200,
        message: 'Staff deleted successfully',
        data: staffs
    });
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}