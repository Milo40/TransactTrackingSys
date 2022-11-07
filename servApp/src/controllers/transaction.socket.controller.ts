import { Transactions as transacts } from "../models/transaction.model";
import { logFailure, logSuccess } from "../utils/cliPrinters";
import { Op } from "sequelize";
import { Server, Socket } from "socket.io";

const socket_fetchData = async (socket: Socket, io: Server) => {
  socket.join("whatever");
  try {
    const allTransacts: transacts[] = await transacts.findAll();
    io.to("whatever").emit("pushData", allTransacts);
  } catch (errno: any) {
    logFailure("[x] An Error Occurred While Dispatching Data. ");
    logFailure("[x] The Error Reads ", String(errno), "error");
  }
};

const socket_getTransactionsByTimeRange = async (
  socket: Socket,
  io: Server,
  data: any
) => {
  const from = new Date(data.from);
  const to = new Date(data.to);
  socket.join("whatever");

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
    io.to("whatever").emit("pushTimeRangedTransactionData", transact);
  } catch (errno: any) {
    logFailure("[x] An Error Occurred While Dispatching Data. ");
    logFailure("[x] The Error Reads ", String(errno), "error");
  }
};

export { socket_fetchData, socket_getTransactionsByTimeRange };
