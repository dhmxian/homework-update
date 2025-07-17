// phiên bản v2 để update nhưng chưa update

import express from 'express';
import productsController from '../../controllers/products.controller';

const router = express.Router();

router.get('/products', productsController.findAll);
router.get('/products/:id', productsController.findById);
router.post('/products', productsController.create);
router.put('/products/:id', productsController.updateById);
router.delete('/products/:id', productsController.deleteById);

export default router