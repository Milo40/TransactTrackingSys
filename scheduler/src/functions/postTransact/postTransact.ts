import { logFailure } from "../../utils/cliPrinters";
import { Transaction } from "../createTransact/createTransact";
import dotenv from "dotenv";
dotenv.config();

const host: String = process.env.HOST! as String;
const port: String = process.env.PORT! as String;

const postTransact: Function = async (transact: Transaction) => {
  try {
    const response: Response = await fetch(
      "http://" + host + ":" + port + "/transactions/add",
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transact),
      }
    );
    return await response;
  } catch (error) {
    logFailure("[x] Failed to POST a Transaction. ");
    logFailure("[x] An Error Occured While Posting This Transaction. ");
    logFailure("[x] The Error Reads ", String(error), "error");
    console.log("\n");
  }
};

export { postTransact };
