import express, { Request, Response } from "express";
import {
  add_transaction,
  get_transaction,
  update_transaction,
  del_transaction,
  all_transactions,
  get_transactionsByTimeRange,
} from "../controllers/transaction.controller";
const transactRouter = express.Router();

transactRouter.get(
  "/all",
  all_transactions,
  (req: Request, res: Response) => {}
);

transactRouter.get(
  "/range",
  get_transactionsByTimeRange,
  (req: Request, res: Response) => {}
);

transactRouter.post(
  "/add",
  add_transaction,
  (req: Request, res: Response) => {}
);

transactRouter.get(
  "/:id",
  get_transaction,
  (req: Request, res: Response) => {}
);

transactRouter.delete(
  "/:id",
  del_transaction,
  (req: Request, res: Response) => {}
);

transactRouter.put(
  "/update/:id",
  update_transaction,
  (req: Request, res: Response) => {}
);

export { transactRouter };
