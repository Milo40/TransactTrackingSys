import { mockData } from "./functions/mockData/mockData";
import { connect_test } from "./utils/checkAvail";
import { logFailure, logSuccess, logInfo } from "./utils/cliPrinters";

const amt: String = process.env.MOCKAMT! as String;
const mockamt = Number(amt);

console.log("\n");
logInfo("[+] Starting Transact Tracking Scheduler... ");

connect_test().then(() => {
  if (process.env.MOCKAMT) {
    logSuccess("[+] Found .ENV File. ");
    logSuccess(
      "[+] Scheduler set to run every. ",
      process.env.SCHEDULED + " Minutes"
    );
  } else {
    logFailure(
      "[x] Couldn't Find The .ENV file. ",
      "Please, check your filesystem.",
      "notice"
    );
    process.exit(1);
  }
  console.log("\n");
  setInterval(() => {
    logSuccess(
      "[+] Generating Mock Transactions. ",
      mockamt + " Transactions ",
      "notice"
    );
    mockData(mockamt);
  }, 60000);
});
