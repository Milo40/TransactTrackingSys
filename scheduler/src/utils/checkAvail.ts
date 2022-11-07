const isInternet = require("check-internet-connected");
import dotenv from "dotenv";
dotenv.config();
import { logFailure, logSuccess, logInfo } from "../utils/cliPrinters";

const host: String = process.env.HOST! as String;
const port: String = process.env.PORT! as String;

const isInternetConfig = {
  timeout: 10000,
  retries: 2,
  domain: "http://" + host + ":" + port,
};

const connect_test = async () => {
  await isInternet(isInternetConfig)
    .then(async (result: boolean) => {
      if (result == true) {
        console.log("\n");
        logSuccess("[+] API Is UP ");
        logSuccess("[+] Connection Seems Fine. Test OK. ");
        console.log("\n");
      } else {
        console.log("\n");
        logFailure("[x] An Error Occurred While Connecting To The Host. ");
        logFailure("[x] The Scheduler Was Unable To Connect To The Host. ");
        logFailure(
          "[x] Seemingly an internet problem. ",
          "Please, check your connection.",
          "notice"
        );
        console.log("\n");
        process.exit(1);
      }
    })
    .catch((err: any) => {
      console.log("\n");
      logFailure("[x] An Error Occurred While Connecting To The Host. ");
      logFailure("[x] The Scheduler Was Unable To Connect To The Host. ");
      logFailure("[x] The Error Reads ", String(err), "error");
      console.log("\n");
      process.exit(1);
    });
};

export { connect_test };
