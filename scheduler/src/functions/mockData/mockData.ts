import { logFailure, logInfo, logSuccess } from "../../utils/cliPrinters";
import {
  createTransact,
  updateTransact,
} from "../createTransact/createTransact";
import { postTransact } from "../postTransact/postTransact";
import { putTransact } from "../putTransact/putTransact";

const mockData: Function = (amount: number) => {
  var amountCreated: number = 0;
  var interv = setInterval(async () => {
    logSuccess("[+] New Transaction Generated ");
    try {
      await postTransact(createTransact()).then(async (ans: Response) => {
        if (ans.status == 201) {
          logSuccess(
            "[+] New Transaction Created ",
            (amountCreated / amount) * 100 + "% "
          );
          await ans.json().then(async (response: any) => {
            setTimeout(async () => {
              await putTransact(updateTransact(response.data)).then(
                async (resp: any) => {
                  if (resp.status == 200) {
                    await resp.json().then(async (response: any) => {
                      console.log("\n");
                      logSuccess(
                        "[+] Transaction Confirmation Updated ",
                        response.ID
                      );
                    });
                  } else {
                    await resp.json().then((response: any) => {
                      console.log("\n");
                      logFailure("[x] Failed to PUT a Transaction. ");
                      logFailure(
                        "[x] An Error Occured While Updating This Transaction. "
                      );
                      logFailure(
                        "[x] Error Code ",
                        String(response.info),
                        "error"
                      );
                      console.log("\n");
                    });
                  }
                }
              );
            }, 10000);
          });
        } else {
          await ans.json().then((response: any) => {
            logFailure("[x] Failed to POST a Transaction. ");
            logFailure("[x] An Error Occured While Posting This Transaction. ");
            logFailure("[x] Error Code ", String(response.info), "error");
            console.log("\n");
          });
        }
      });
    } catch (errno: any) {
      logFailure("[x] Failed to POST a Transaction. ");
      logFailure("[x] An Error Occured While Posting This Transaction. ");
      logFailure("[x] The Error Reads ", String(errno), "error");
      console.log("\n");
    }
    console.log("\n");
    amountCreated = amountCreated + 1;
    if (amountCreated === amount) {
      clearInterval(interv);
      logSuccess(
        "[+] Created Transactions. ",
        amountCreated +
          "/" +
          amount +
          " -> " +
          (amountCreated / amount) * 100 +
          "% "
      );
    }
  }, 3000);
};

export { mockData };
