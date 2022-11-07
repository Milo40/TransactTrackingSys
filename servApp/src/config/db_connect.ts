import dotenv from "dotenv";
import { Dialect } from "sequelize";
dotenv.config();
import sequelize, { Sequelize } from "sequelize-typescript";
import { Transactions } from "../models/transaction.model";
import { logFailure, logInfo, logSuccess } from "../utils/cliPrinters";

/* try { */

const dbms = process.env.DBMS! as Dialect;
const host = process.env.HOST! as string;
const uname = process.env.UNAME! as string;
const pwd = process.env.PASSWD! as string;
const database = process.env.DATABASE! as string;
const dport = process.env.DPORT!;
/* } catch (err) {
  console.log("\n");
  logFailure("[x] An Error Occurred While Connecting To The Database. ");
  logFailure(
    "[x] Failed to read values from Config file. ",
    String(err),
    "error"
  );
} */

const db_Connect: Sequelize = new Sequelize(database, uname, pwd, {
  host: host,
  dialect: dbms,
  port: Number(dport),
  logging: false,
  models: [Transactions],
});

const connect: Function = async () => {
  try {
    await db_Connect.authenticate().then(async () => {
      console.log("\n");
      logSuccess("[+] Connected To The Database ");
      logSuccess("[+] Database Connection Seems Fine. Test OK. ");
      try {
        await db_Connect.sync({ alter: true });
        logSuccess("[+] Database schemas synchronization succeeded ");
      } catch (err) {
        logFailure(
          "[x] Failed to synchronize with database schemas ",
          String(err),
          "error"
        );
      }
    });
  } catch (err) {
    console.log("\n");
    logFailure("[x] An Error Occurred While Connecting To The Database. ");
    logFailure("[x] The Error Reads ", String(err), "error");
    logFailure("[x] Server Was Unable To Connect To The Database. ");
    logFailure("[x] Queries May Not Work. ");
  }
};

const disconnect: Function = async () => {
  try {
    await db_Connect.close().then(() => {
      logInfo("[+] Disconnected From The Database ");
    });
  } catch (err) {
    logFailure("[x] An Error Occurred While Disconnecting From Database ");
    logFailure("[x] The Error Reads ", String(err), "error");
  }
};

export { connect, disconnect, db_Connect };
