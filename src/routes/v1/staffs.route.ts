import express from 'express';

const router = express.Router();
const staffs = [
    {id:1 , name: 'Alex'},
    {id:2 , name: 'Ricky'},
    {id:3 , name: 'Thomas'},

]

router.get('/staffs', (req, res) =>{
    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: staffs,
    });
});

router.get('/staffs/:id', (req, res) =>{
    const {id} = req.params;
    const staff = staffs.find(cat => cat.id === parseInt(id));

    if (!staff) {
        res.status(404).json({
            statusCode: 404,
            message: 'Staff NOT Found',
        });
    }

    res.status(200).json({
        statusCode: 200,
        message: 'Successfully',
        data: staff,
    });
});

router.post('/staffs', (req, res) =>{
    const { name } = req.body;
    console.log(typeof req.body )
    const newStaff = {
        id: staffs.length +1,
        name,
    };
    staffs.push(newStaff);
    res.status(201).json({
        statusCode: 201,
        message: 'Staff crated successfully!',
        data: newStaff,
    });
});

router.put('/staffs/:id', (req, res) =>{
    const { id } = req.params;
    const { name } = req.body;
    const staffIndex = staffs.findIndex(cat => cat.id === parseInt(id));

    if (staffIndex === -1) {
        res.status(404).json({
            statusCode: 404,
            message: 'Staff NOT Found',
        });
    };

    staffs[staffIndex].name = name;
    res.status(200).json({
        statusCode: 200,
        message: 'Staff updated successfully',
        data: staffs[staffIndex],
    });
});

router.delete('/staffs/:id', (req, res) => {
    const { id } = req.params;
    const staffIndex = staffs.findIndex(cat => cat.id === parseInt(id));

    if (staffIndex === -1) {
         res.status(404).json({
            statusCode: 404,
            message: 'Staff not found',
        });
    }

    staffs.splice(staffIndex, 1);
    res.status(200).json({
        statusCode: 200,
        message: 'Staff deleted successfully',
        data: staffs
    });
});

export default router