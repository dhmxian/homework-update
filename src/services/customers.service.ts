import { customers } from "../databases/data";
import createError from 'http-errors';

const findAll = ()=>{
  return customers;
}

const findById =(id: number)=>{
  const customer = customers.find(cat => cat.id === (id));

  if (!customer) {
        throw createError(400, 'Customer NOT Found')
    }
    return customer
}

const create = (payload: {name: string})=>{
    const newCustomer = {
        id: customers.length +1,
        name: payload.name,
    };
    customers.push(newCustomer);
    return newCustomer
}

const updateById = (id: number, payload: {name: string})=>{
const customerIndex = customers.findIndex(cat => cat.id === (id));

    if (customerIndex === -1) {
        throw createError(400, 'Customer NOT Found')

    };
    customers[customerIndex].name = payload.name;

    return customers[customerIndex];
}

const deleteById = (id: number)=>{
   const customerIndex = customers.findIndex(cat => cat.id === (id));

    if (customerIndex === -1) {
      throw createError(400, 'Customer NOT Found')
    }

    customers.splice(customerIndex, 1);
    return customers
}

export default {
  findAll,
  findById,
  create,
  updateById,
  deleteById
}