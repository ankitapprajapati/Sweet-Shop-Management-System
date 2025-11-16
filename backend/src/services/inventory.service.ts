import { SweetModel } from "../models/sweet.model";

export const purchaseSweet = async (id: string, qty: number) => {
  const sweet = await SweetModel.findById(id);
  if (!sweet) throw new Error("Sweet not found");

  if (qty <= 0 || qty > sweet.quantity) {
    throw new Error("Invalid purchase quantity");
  }

  sweet.quantity -= qty;
  await sweet.save();

  return sweet.toObject();
};

export const restockSweet = async (id: string, qty: number) => {
  const sweet = await SweetModel.findById(id);
  if (!sweet) throw new Error("Sweet not found");

  if (qty <= 0) throw new Error("Invalid restock quantity");

  sweet.quantity += qty;
  await sweet.save();

  return sweet.toObject();
};
