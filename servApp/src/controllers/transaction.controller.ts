import { Transactions as transacts } from "../models/transaction.model";
import { logFailure, logSuccess } from "../utils/cliPrinters";
import { idsGen } from "../utils/idsGen";
import { Request, Response } from "express";
import { Op } from "sequelize";
import { io } from "..";

const all_transactions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const allTransacts: transacts[] = await transacts.findAll();
    logSuccess("[+] /transactions/all::GET ");
    return res.status(200).json(allTransacts);
  } catch (err) {
    logFailure("[x] /transactions/all::GET ", String(err), "error");
    return res.json({ info: "Occurring error. Please, retry later" });
  }
};

const add_transaction = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const transact: transacts = await transacts.create({
      ID: idsGen(5),
      receiver: req.body.receiver,
      sender: req.body.sender,
      confirmed: req.body.confirmed,
      amount: req.body.amount,
    });
    logSuccess("[+] /transactions/add::POST ", transact.ID);
    try {
      const allTransacts: transacts[] = await transacts.findAll();
      io.to("whatever").emit("pushData", allTransacts);
      console.log("\n");
      logSuccess(
        "[+] Emitting Changes to Sockets ",
        " From Socket Connection. "
      );
    } catch (errno: any) {
      logFailure("[x] An Error Occurred While Dispatching Data. ");
      logFailure("[x] The Error Reads ", String(errno), "error");
    }
    return res
      .status(201)
      .json({ info: "Transaction Created", data: transact });
  } catch (err) {
    logFailure("[x] /transactions/add::POST ", String(err), "error");
    return res.json({ info: "Occurring error. Please, retry later" });
  }
};

const get_transaction = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const transact: transacts | null = await transacts.findByPk(req.params.id);
    logSuccess("[+] /transactions/" + req.params.id + "::GET ");
    return res.status(200).json(transact);
  } catch (err) {
    logFailure(
      "[x] /transactions/" + req.params.id + "::GET ",
      String(err),
      "error"
    );
    return res.json({ info: "Occurring error. Please, retry later" });
  }
};

const get_transactionsByTimeRange = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const from = new Date(req.body.from);
  const to = new Date(req.body.to);

  try {
    const transact: transacts[] | null = await transacts.findAll({
      where: {
        [Op.or]: [
          {
            createdAt: {
              [Op.between]: [from, to],
            },
          },
        ],
      },
    });
    logSuccess(
      "[+] /transactions/range::GET ",
      "FROM " +
        from.toDateString() +
        " TO " +
        to.toDateString() +
        "; " +
        transact.length +
        " Transactions FOUND "
    );
    return res.status(200).json(transact);
  } catch (err) {
    logFailure(
      "[x] /transactions/range::GET " +
        from.toDateString +
        " to " +
        to.toDateString,
      String(err),
      "error"
    );
    return res.json({ info: "Occurring error. Please, retry later" });
  }
};

const del_transaction = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const transact: transacts | null = await transacts.findByPk(id);
    await transacts.destroy({ where: { id } });
    logSuccess("[+] /transactions/" + id + "::DEL ");
    try {
      const allTransacts: transacts[] = await transacts.findAll();
      io.to("whatever").emit("pushData", allTransacts);
      console.log("\n");
      logSuccess(
        "[+] Emitting Changes to Sockets ",
        " From Socket Connection. "
      );
    } catch (errno: any) {
      logFailure("[x] An Error Occurred While Dispatching Data. ");
      logFailure("[x] The Error Reads ", String(errno), "error");
    }
    return res
      .status(200)
      .json({ info: "Transaction Deleted", data: transact });
  } catch (err) {
    logFailure(
      "[x] /transactions/" + req.params.id + "::DEL ",
      String(err),
      "error"
    );
    return res.json({ info: "Occurring error. Please, retry later" });
  }
};

const update_transaction = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const transactPrev: transacts | null = await transacts.findByPk(id);
    await transacts.update(
      {
        receiver: req.body.receiver,
        sender: req.body.sender,
        confirmed: req.body.confirmed,
        amount: req.body.amount,
      },
      { where: { id } }
    );
    const transact: transacts | null = await transacts.findByPk(id);
    logSuccess("[+] /transactions/update/" + id + "::PUT ");
    try {
      const allTransacts: transacts[] = await transacts.findAll();
      io.to("whatever").emit("pushData", allTransacts);
      console.log("\n");
      logSuccess(
        "[+] Emitting Changes to Sockets ",
        " From Socket Connection. "
      );
    } catch (errno: any) {
      logFailure("[x] An Error Occurred While Dispatching Data. ");
      logFailure("[x] The Error Reads ", String(errno), "error");
    }
    return res.status(200).json({
      info: "Transaction Updated",
      oldState: transactPrev,
      state: transact,
    });
  } catch (err) {
    logFailure(
      "[x] /transactions/update/" + req.params.id + "::PUT ",
      String(err),
      "error"
    );
    return res.json({ info: "Occurring error. Please, retry later" });
  }
};

export {
  all_transactions,
  add_transaction,
  get_transaction,
  update_transaction,
  del_transaction,
  get_transactionsByTimeRange,
};
