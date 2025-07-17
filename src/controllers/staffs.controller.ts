import {Request, Response} from "express"
import staffsService from "../services/staffs.service";

const findAll = (req: Request, res: Response)=>{

const staffs = staffsService.findAll()

 res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: staffs,
    });
}

const findById = (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const staff = staffsService.findById(parseInt(id))

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: staff,
    });
}

const create = (req: Request, res: Response) =>{
    const staff = staffsService.create(req.body)
    
    res.status(201).json({
        statusCode: 201,
        message: 'Staff created successfully!',
        data: staff,
    });
}

const updateById = (req: Request, res: Response) =>{
    const { id } = req.params;

    const staff = staffsService.updateById(parseInt(id),req.body)
    
    res.status(200).json({
        statusCode: 200,
        message: 'Staff updated successfully',
        data: staff,
    });
}

const deleteById = (req: Request, res: Response) => {
    const { id } = req.params;

    const staffs = staffsService.deleteById(parseInt(id))
   
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