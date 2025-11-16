import mongoose, { Schema } from "mongoose";
import { Sweet } from "../interfaces/sweet.interface";

const sweetSchema = new Schema<Sweet>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export const SweetModel = mongoose.model<Sweet>("Sweet", sweetSchema);
