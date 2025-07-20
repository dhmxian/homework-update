import { brands } from "../databases/data";
import createError from 'http-errors';

const findAll = async ()=>{
  return brands;
}

const findById = async (id: number)=>{
  const brand = brands.find(cat => cat.id === (id));

  if (!brand) {
        throw createError(400, 'Brand NOT Found')
    }
    return brand
}

const create = async (payload: {name: string, description: string})=>{
    const newBrand = {
        id: brands.length + 1,
        name: payload.name,
        description: payload.description,
    };
    brands.push(newBrand);
    return newBrand
}

const updateById = async (id: number, payload: {name: string})=>{
const brandIndex = brands.findIndex(cat => cat.id === (id));

    if (brandIndex === -1) {
        throw createError(400, 'Brand NOT Found')

    };
    brands[brandIndex].name = payload.name;

    return brands[brandIndex];
}

const deleteById = async (id: number)=>{
   const brandIndex = brands.findIndex(cat => cat.id === (id));

    if (brandIndex === -1) {
      throw createError(400, 'Brand NOT Found')
    }

    brands.splice(brandIndex, 1);
    return brands
}

export default {
  findAll,
  findById,
  create,
  updateById,
  deleteById
}