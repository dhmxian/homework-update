import { customers } from "../databases/data";
import createError from 'http-errors';

const findAll = async ()=>{
  return customers;
}

const findById = async (id: number)=>{
  const customer = customers.find(cat => cat.id === (id));

  if (!customer) {
        throw createError(400, 'Customer NOT Found')
    }
    return customer
}

const create = async (payload: {
    firstName: string,
    lastName: string,
    phone: number,
    email: string,
    birthday: number,
    street: string,
    city: string,
    state: string,
    zipCode: number
})=>{
    const newCustomer = {
        id: customers.length + 1,
        firstName: payload.firstName,
        lastName: payload.lastName,
        phone: payload.phone,
        email: payload.email,
        birthday: payload.birthday,
        street: payload.street,
        city: payload.city,
        state: payload.state,
        zipCode: payload.zipCode
    };
    customers.push(newCustomer);
    return newCustomer
}

const updateById = async (
  id: number,
  payload: {
    firstName?: string,
    lastName?: string,
    phone?: number,
    email?: string,
    birthday?: number,
    street?: string,
    city?: string,
    state?: string,
    zipCode?: number
  }
) => {
  const customerIndex = customers.findIndex(cat => cat.id === id);

  if (customerIndex === -1) {
    throw createError(400, 'Customer NOT Found');
  }

  const customer = customers[customerIndex];
  customers[customerIndex] = {
    ...customer,
    ...payload
  };

  return customers[customerIndex];
}

const deleteById = async (id: number)=>{
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