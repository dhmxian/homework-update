import { categories } from "../databases/data";
import createError from 'http-errors';

const findAll = async ()=>{
  return categories;
}

const findById = async (id: number)=>{
  const category = categories.find(cat => cat.id === (id));

  if (!category) {
        throw createError(400, 'Category NOT Found')
    }
    return category
}

const create = async (payload: {name: string, description: string})=>{
    const newCategory = {
        id: categories.length + 1,
        name: payload.name,
        description: payload.description,
    };
    categories.push(newCategory);
    return newCategory
}

const updateById = async (id: number, payload: {name: string})=>{
const categoryIndex = categories.findIndex(cat => cat.id === (id));

    if (categoryIndex === -1) {
        throw createError(400, 'Category NOT Found')

    };
    categories[categoryIndex].name = payload.name;

    return categories[categoryIndex];
}

const deleteById = async (id: number)=>{
   const categoryIndex = categories.findIndex(cat => cat.id === (id));

    if (categoryIndex === -1) {
      throw createError(400, 'Category NOT Found')
    }

    categories.splice(categoryIndex, 1);
    return categories
}

export default {
  findAll,
  findById,
  create,
  updateById,
  deleteById
}