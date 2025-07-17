import { staffs } from "../databases/data";
import createError from 'http-errors';

const findAll = ()=>{
  return staffs;
}

const findById =(id: number)=>{
  const staff = staffs.find(cat => cat.id === (id));

  if (!staff) {
        throw createError(400, 'Staff NOT Found')
    }
    return staff
}

const create = (payload: {name: string})=>{
    const newStaff = {
        id: staffs.length +1,
        name: payload.name,
    };
    staffs.push(newStaff);
    return newStaff
}

const updateById = (id: number, payload: {name: string})=>{
const staffIndex = staffs.findIndex(cat => cat.id === (id));

    if (staffIndex === -1) {
        throw createError(400, 'Staff NOT Found')

    };
    staffs[staffIndex].name = payload.name;

    return staffs[staffIndex];
}

const deleteById = (id: number)=>{
   const staffIndex = staffs.findIndex(cat => cat.id === (id));

    if (staffIndex === -1) {
      throw createError(400, 'Staff NOT Found')
    }

    staffs.splice(staffIndex, 1);
    return staffs
}

export default {
  findAll,
  findById,
  create,
  updateById,
  deleteById
}