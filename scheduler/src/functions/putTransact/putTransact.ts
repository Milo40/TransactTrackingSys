import { logFailure } from "../../utils/cliPrinters";
import { Transaction } from "../createTransact/createTransact";

const host: String = process.env.HOST! as String;
const port: String = process.env.PORT! as String;

const putTransact: Function = async (transact: Transaction) => {
  try {
    const response: Response = await fetch(
      "http://" + host + ":" + port + "/transactions/update/" + transact.ID,
      {
        method: "PUT",
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
    logFailure("[x] Failed to PUT a Transaction. ");
    logFailure("[x] An Error Occured While Posting This Transaction. ");
    logFailure("[x] The Error Reads ", String(error), "error");
    console.log("\n");
  }
};

export { putTransact };
