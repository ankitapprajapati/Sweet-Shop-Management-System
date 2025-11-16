import { Sweet } from "../interfaces/sweet.interface";
import { SweetModel } from "../models/sweet.model";

// Create sweet
export const createSweet = async (payload: Sweet) => {
  const sweet = await SweetModel.create(payload);
  return sweet.toObject();
};

// List all sweets
export const listSweets = async () => {
  return await SweetModel.find().lean();
};

// Search sweets
export const searchSweets = async (query: any) => {
  const filter: any = {};

  if (query.name) filter.name = new RegExp(query.name, "i");
  if (query.category) filter.category = query.category;
  if (query.minPrice) filter.price = { $gte: Number(query.minPrice) };
  if (query.maxPrice) {
    filter.price = {
      ...(filter.price || {}),
      $lte: Number(query.maxPrice),
    };
  }

  return await SweetModel.find(filter).lean();
};

// Update sweet
export const updateSweet = async (id: string, data: Partial<Sweet>) => {
  const sweet = await SweetModel.findByIdAndUpdate(id, data, {
    new: true,
  }).lean();

  if (!sweet) throw new Error("Sweet not found");

  return sweet;
};

// Delete sweet (admin-only handled in controller/middleware)
export const deleteSweet = async (id: string) => {
  const sweet = await SweetModel.findByIdAndDelete(id);

  if (!sweet) throw new Error("Sweet not found");

  return true;
};
