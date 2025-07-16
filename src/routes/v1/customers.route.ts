import express from 'express';

const router = express.Router();
const customers = [
    {id:1 , name: 'John'},
    {id:2 , name: 'Marry'},
    {id:3 , name: 'David'},

]

router.get('/customers', (req, res) =>{
    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: customers,
    });
});

router.get('/customers/:id', (req, res) =>{
    const {id} = req.params;
    const customer = customers.find(cat => cat.id === parseInt(id));

    if (!customer) {
        res.status(404).json({
            statusCode: 404,
            message: 'Customer NOT Found',
        });
    }

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: customer,
    });
});

router.post('/customers', (req, res) =>{
    const { name } = req.body;
    console.log(typeof req.body )
    const newCustomer = {
        id: customers.length +1,
        name,
    };
    customers.push(newCustomer);
    res.status(201).json({
        statusCode: 201,
        message: 'Customer crated successfully!',
        data: newCustomer,
    });
});

router.put('/customers/:id', (req, res) =>{
    const { id } = req.params;
    const { name } = req.body;
    const customerIndex = customers.findIndex(cat => cat.id === parseInt(id));

    if (customerIndex === -1) {
        res.status(404).json({
            statusCode: 404,
            message: 'Customer NOT Found',
        });
    };

    customers[customerIndex].name = name;
    res.status(200).json({
        statusCode: 200,
        message: 'Customer updated successfully',
        data: customers[customerIndex],
    });
});

router.delete('/customers/:id', (req, res) => {
    const { id } = req.params;
    const customerIndex = customers.findIndex(cat => cat.id === parseInt(id));

    if (customerIndex === -1) {
         res.status(404).json({
            statusCode: 404,
            message: 'Customer not found',
        });
    }

    customers.splice(customerIndex, 1);
    res.status(200).json({
        statusCode: 200,
        message: 'Customer deleted successfully',
        data: customers
    });
});

export default router