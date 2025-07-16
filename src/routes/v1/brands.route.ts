import express from 'express';

const router = express.Router();
const brands = [
    {id:1 , name: 'Apple'},
    {id:2 , name: 'Nike'},
    {id:3 , name: 'ASUS'},

]

router.get('/brands', (req, res) =>{
    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: brands,
    });
});

router.get('/brands/:id', (req, res) =>{
    const {id} = req.params;
    const brand = brands.find(cat => cat.id === parseInt(id));

    if (!brand) {
        res.status(404).json({
            statusCode: 404,
            message: 'Brand NOT Found',
        });
    }

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: brand,
    });
});

router.post('/brands', (req, res) =>{
    const { name } = req.body;
    console.log(typeof req.body )
    const newBrand = {
        id: brands.length +1,
        name,
    };
    brands.push(newBrand);
    res.status(201).json({
        statusCode: 201,
        message: 'Brand crated successfully!',
        data: newBrand,
    });
});

router.put('/brands/:id', (req, res) =>{
    const { id } = req.params;
    const { name } = req.body;
    const brandIndex = brands.findIndex(cat => cat.id === parseInt(id));

    if (brandIndex === -1) {
        res.status(404).json({
            statusCode: 404,
            message: 'Brand NOT Found',
        });
    };

    brands[brandIndex].name = name;
    res.status(200).json({
        statusCode: 200,
        message: 'Brand updated successfully',
        data: brands[brandIndex],
    });
});

router.delete('/brands/:id', (req, res) => {
    const { id } = req.params;
    const brandIndex = brands.findIndex(cat => cat.id === parseInt(id));

    if (brandIndex === -1) {
         res.status(404).json({
            statusCode: 404,
            message: 'Brand not found',
        });
    }

    brands.splice(brandIndex, 1);
    res.status(200).json({
        statusCode: 200,
        message: 'Brand deleted successfully',
        data: brands
    });
});

export default router