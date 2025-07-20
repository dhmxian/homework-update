import { products } from "../databases/data";
import createError from 'http-errors';

const findAll = async ()=>{
  return products;
}

const findById = async (id: number)=>{
  const product = products.find(cat => cat.id === (id));

  if (!product) {
        throw createError(400, 'Product NOT Found')
    }
    return product
}

const create = async (payload: {
    productName: string,
    price: number,
    discount: number,
    categoryId: number,
    brandId: number,
    description: string,
    modelYear: number
})=>{
    const newProduct = {
        id: products.length + 1,
        productName: payload.productName,
        price: payload.price,
        discount: payload.discount,
        categoryId: payload.categoryId,
        brandId: payload.brandId,
        description: payload.description,
        modelYear: payload.modelYear
    };
    products.push(newProduct);
    return newProduct
}

const updateById = async (id: number, payload: {productName: string})=>{
const productIndex = products.findIndex(cat => cat.id === (id));

    if (productIndex === -1) {
        throw createError(400, 'Product NOT Found')

    };
    products[productIndex].productName = payload.productName;

    return products[productIndex];
}

const deleteById = async (id: number)=>{
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