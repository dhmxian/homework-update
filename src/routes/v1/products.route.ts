import express from 'express';

const router = express.Router();
const products = [
    {id:1 , name: 'Phone'},
    {id:2 , name: 'Shoe'},
    {id:3 , name: 'Laptop'},

]

router.get('/products', (req, res) =>{
    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: products,
    });
});

router.get('/products/:id', (req, res) =>{
    const {id} = req.params;
    const product = products.find(cat => cat.id === parseInt(id));

    if (!product) {
        res.status(404).json({
            statusCode: 404,
            message: 'Product NOT Found',
        });
    }

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: product,
    });
});

router.post('/products', (req, res) =>{
    const { name } = req.body;
    console.log(typeof req.body )
    const newProduct = {
        id: products.length +1,
        name,
    };
    products.push(newProduct);
    res.status(201).json({
        statusCode: 201,
        message: 'Product crated successfully!',
        data: newProduct,
    });
});

router.put('/products/:id', (req, res) =>{
    const { id } = req.params;
    const { name } = req.body;
    const productIndex = products.findIndex(cat => cat.id === parseInt(id));

    if (productIndex === -1) {
        res.status(404).json({
            statusCode: 404,
            message: 'Product NOT Found',
        });
    };

    products[productIndex].name = name;
    res.status(200).json({
        statusCode: 200,
        message: 'Product updated successfully',
        data: products[productIndex],
    });
});

router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(cat => cat.id === parseInt(id));

    if (productIndex === -1) {
         res.status(404).json({
            statusCode: 404,
            message: 'Product not found',
        });
    }

    products.splice(productIndex, 1);
    res.status(200).json({
        statusCode: 200,
        message: 'Product deleted successfully',
        data: products
    });
});

export default router