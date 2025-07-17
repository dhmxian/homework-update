import { products } from "../databases/data";
import createError from 'http-errors';

const findAll = ()=>{
  return products;
}

const findById =(id: number)=>{
  const product = products.find(cat => cat.id === (id));

  if (!product) {
        throw createError(400, 'Product NOT Found')
    }
    return product
}

const create = (payload: {name: string})=>{
    const newProduct = {
        id: products.length +1,
        name: payload.name,
    };
    products.push(newProduct);
    return newProduct
}

const updateById = (id: number, payload: {name: string})=>{
const productIndex = products.findIndex(cat => cat.id === (id));

    if (productIndex === -1) {
        throw createError(400, 'Product NOT Found')

    };
    products[productIndex].name = payload.name;

    return products[productIndex];
}

const deleteById = (id: number)=>{
   const productIndex = products.findIndex(cat => cat.id === (id));

    if (productIndex === -1) {
      throw createError(400, 'Product NOT Found')
    }

    products.splice(productIndex, 1);
    return products
}

export default {
  findAll,
  findById,
  create,
  updateById,
  deleteById
}