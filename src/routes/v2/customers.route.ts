// phiên bản v2 để update nhưng chưa update

import express from 'express';
import customerController from '../../controllers/customer.controller';

const router = express.Router();

router.get('/customers', customerController.findAll);
router.get('/customers/:id', customerController.findById);
router.post('/customers', customerController.create);
router.put('/customers/:id', customerController.updateById);
router.delete('/customers/:id', customerController.deleteById);

export default router