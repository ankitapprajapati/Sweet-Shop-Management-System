import { Router } from "express";
import {
  createSweetController,
  listSweetController,
  searchSweetController,
  updateSweetController,
  deleteSweetController,
  purchaseSweetController,
  restockSweetController,
} from "../controllers/sweet.controller";

import { authenticate, requireAdmin } from "../middleware/auth.middleware";

const sweetRouter = Router();

// All sweet routes require login
sweetRouter.use(authenticate);

sweetRouter.post("/", createSweetController);
sweetRouter.get("/", listSweetController);
sweetRouter.get("/search", searchSweetController);
sweetRouter.put("/:id", updateSweetController);
sweetRouter.delete("/:id", requireAdmin, deleteSweetController);

// Inventory
sweetRouter.post("/:id/purchase", purchaseSweetController);
sweetRouter.post("/:id/restock", requireAdmin, restockSweetController);

export default sweetRouter;
