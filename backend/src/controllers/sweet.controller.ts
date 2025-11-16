import { Request, Response } from "express";
import {
  createSweet,
  listSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
} from "../services/sweet.service";
import {
  purchaseSweet,
  restockSweet,
} from "../services/inventory.service";

export const createSweetController = async (req: Request, res: Response) => {
  try {
    const sweet = await createSweet(req.body);
    return res.status(201).json({
      success: true,
      message: "Sweet created successfully",
      sweet,
    });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const listSweetController = async (req: Request, res: Response) => {
  try {
    const sweets = await listSweets();
    return res.json({ success: true, sweets });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const searchSweetController = async (req: Request, res: Response) => {
  try {
    const sweets = await searchSweets(req.query);
    return res.json({ success: true, sweets });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const updateSweetController = async (req: Request, res: Response) => {
  try {
    const sweet = await updateSweet(req.params.id, req.body);
    return res.json({
      success: true,
      message: "Sweet updated successfully",
      sweet,
    });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteSweetController = async (req: Request, res: Response) => {
  try {
    await deleteSweet(req.params.id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const purchaseSweetController = async (req: Request, res: Response) => {
  try {
    const sweet = await purchaseSweet(req.params.id, Number(req.body.quantity));
    return res.json({
      success: true,
      message: "Purchase successful",
      sweet,
    });
  } catch (error: any) {
    return res.status(400).json({ success:false, message: error.message });
  }
};

export const restockSweetController = async (req: Request, res: Response) => {
  try {
    const sweet = await restockSweet(req.params.id, Number(req.body.quantity));
    return res.json({
      success: true,
      message: "Restock successful",
      sweet,
    });
  } catch (error: any) {
    return res.status(400).json({ success:false, message: error.message });
  }
};
