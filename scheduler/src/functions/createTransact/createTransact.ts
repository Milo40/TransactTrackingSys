import { genAmt, genName } from "../../utils/valGenerator";

interface Transaction {
  ID?: string;
  receiver: string;
  sender: string;
  amount: number;
  confirmed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const createTransact: Function = (opts: Transaction) => {
  return {
    receiver: genName(),
    sender: genName(),
    amount: genAmt(5),
  };
};

const updateTransact: Function = (opts: Transaction) => {
  return {
    ID: opts.ID,
    receiver: opts.receiver,
    sender: opts.sender,
    amount: opts.amount,
    confirmed: true,
    createdAt: opts.createdAt,
    updatedAt: opts.updatedAt,
  };
};

export { createTransact, updateTransact, Transaction };
