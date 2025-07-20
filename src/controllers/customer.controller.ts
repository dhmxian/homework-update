import {Request, Response} from "express"
import customersService from "../services/customers.service";

const findAll = async (req: Request, res: Response)=>{

const customers = await customersService.findAll()

 res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: customers,
    });
}

const findById = async (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const customer = await customersService.findById(parseInt(id))

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: customer,
    });
}

const create = async (req: Request, res: Response) =>{
    const customer = await customersService.create(req.body)
    
    res.status(201).json({
        statusCode: 201,
        message: 'Customer created successfully!',
        data: customer,
    });
}

const updateById = async (req: Request, res: Response) =>{
    const { id } = req.params;

    const customer = await customersService.updateById(parseInt(id),req.body)
    
    res.status(200).json({
        statusCode: 200,
        message: 'Customer updated successfully',
        data: customer,
    });
}

const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const customers = await customersService.deleteById(parseInt(id))
   
    res.status(200).json({
        statusCode: 200,
        message: 'Customer deleted successfully',
        data: customers
    });
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}