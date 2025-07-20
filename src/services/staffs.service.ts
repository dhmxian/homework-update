import { staffs } from "../databases/data";
import createError from 'http-errors';

const findAll = async ()=>{
  return staffs;
}

const findById = async (id: number)=>{
  const staff = staffs.find(cat => cat.id === (id));

  if (!staff) {
        throw createError(400, 'Staff NOT Found')
    }
    return staff
}

const create = async (payload: {firstName: string, lastName: string, phone: number, email: string, active: number, storeId: number, manageId: number})=>{
    const newStaff = {
        id: staffs.length + 1,
        firstName: payload.firstName,
        lastName: payload.lastName,
        phone: payload.phone,
        email: payload.email,
        active: payload.active,
        storeId: payload.storeId,
        manageId: payload.manageId
    };
    staffs.push(newStaff);
    return newStaff
}

const updateById = async (id: number, payload: {firstName?: string, lastName?: string, phone?: number, email?: string, active?: number, storeId?: number, manageId?: number})=>{
    const staffIndex = staffs.findIndex(cat => cat.id === (id));

    if (staffIndex === -1) {
        throw createError(400, 'Staff NOT Found')
    };

    // Chỉ cập nhật các trường được cung cấp
    const staff = staffs[staffIndex];
    if (payload.firstName !== undefined) staff.firstName = payload.firstName;
    if (payload.lastName !== undefined) staff.lastName = payload.lastName;
    if (payload.phone !== undefined) staff.phone = payload.phone;
    if (payload.email !== undefined) staff.email = payload.email;
    if (payload.active !== undefined) staff.active = payload.active;
    if (payload.storeId !== undefined) staff.storeId = payload.storeId;
    if (payload.manageId !== undefined) staff.manageId = payload.manageId;

    return staff;
}

const deleteById = async (id: number)=>{
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