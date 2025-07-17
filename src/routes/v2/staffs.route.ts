// phiên bản v2 để update nhưng chưa update


import express from 'express';
import staffsController from '../../controllers/staffs.controller';

const router = express.Router();

router.get('/staffs', staffsController.findAll);
router.get('/staffs/:id', staffsController.findById);
router.post('/staffs', staffsController.create);
router.put('/staffs/:id', staffsController.updateById);
router.delete('/staffs/:id', staffsController.deleteById);

export default router