import express from 'express';

const router = express.Router();
const categories = [
    {id:1 , name: 'Clothing'},
    {id:2 , name: 'Jewelry'},
    {id:3 , name: 'Electronics'},

]

router.get('/categories', (req, res) =>{
    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: categories,
    });
});

router.get('/categories/:id', (req, res) =>{
    const {id} = req.params;
    const category = categories.find(cat => cat.id === parseInt(id));

    if (!category) {
        res.status(404).json({
            statusCode: 404,
            message: 'Category NOT Found',
        });
    }

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: category,
    });
});

router.post('/categories', (req, res) =>{
    const { name } = req.body;
    console.log(typeof req.body )
    const newCategory = {
        id: categories.length +1,
        name,
    };
    categories.push(newCategory);
    res.status(201).json({
        statusCode: 201,
        message: 'Category crated successfully!',
        data: newCategory,
    });
});

router.put('/categories/:id', (req, res) =>{
    const { id } = req.params;
    const { name } = req.body;
    const categoryIndex = categories.findIndex(cat => cat.id === parseInt(id));

    if (categoryIndex === -1) {
        res.status(404).json({
            statusCode: 404,
            message: 'Category NOT Found',
        });
    };

    categories[categoryIndex].name = name;
    res.status(200).json({
        statusCode: 200,
        message: 'Category updated successfully',
        data: categories[categoryIndex],
    });
});

router.delete('/categories/:id', (req, res) => {
    const { id } = req.params;
    const categoryIndex = categories.findIndex(cat => cat.id === parseInt(id));

    if (categoryIndex === -1) {
         res.status(404).json({
            statusCode: 404,
            message: 'Category not found',
        });
    }

    categories.splice(categoryIndex, 1);
    res.status(200).json({
        statusCode: 200,
        message: 'Category deleted successfully',
        data: categories
    });
});

export default router