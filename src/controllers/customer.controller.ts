import {Request, Response} from "express"
import customersService from "../services/customers.service";

const findAll = (req: Request, res: Response)=>{

const customers = customersService.findAll()

 res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: customers,
    });
}

const findById = (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const customer = customersService.findById(parseInt(id))

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: customer,
    });
}

const create = (req: Request, res: Response) =>{
    const customer = customersService.create(req.body)
    
    res.status(201).json({
        statusCode: 201,
        message: 'Customer created successfully!',
        data: customer,
    });
}

const updateById = (req: Request, res: Response) =>{
    const { id } = req.params;

    const customer = customersService.updateById(parseInt(id),req.body)
    
    res.status(200).json({
        statusCode: 200,
        message: 'Customer updated successfully',
        data: customer,
    });
}

const deleteById = (req: Request, res: Response) => {
    const { id } = req.params;

    const customers = customersService.deleteById(parseInt(id))
   
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