import express, { Application, Request, Response } from "express";
import { Server } from "socket.io";
import http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

import { connect, disconnect, db_Connect } from "./config/db_connect";
import { logInfo, logSuccess } from "./utils/cliPrinters";
import { transactRouter } from "./routes/transaction.route";
import { Transactions } from "./models/transaction.model";
import { Sequelize } from "sequelize";
import {
  socket_fetchData,
  socket_getTransactionsByTimeRange,
} from "./controllers/transaction.socket.controller";

const app: Application = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { methods: "GET, POST, PUT, DELETE" },
});
const port = process.env.PORT || 7000;

app.use(cookieParser());
app.use(
  cors({
    origin: true,
  })
);
app.use(helmet());
app.use(express.json({ type: ["application/json", "text/plain"] }));

console.log("\n");
logInfo("[+] Starting Transact Tracking API Server... ");

connect().then(() => {
  app.use(express.static("assets/pages"));
  app.use("/transactions", transactRouter);
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      info: "This is a response from the API Server. Cool huh ⚡📶📶 ?",
    });
  });

  io.on("connection", (socket) => {
    console.log("\n");
    logSuccess("[+] New socket Connection Occured.");
    socket.on("disconnect", () => {
      console.log("\n");
      logInfo("[+] A Socket Has Been Disconnected.");
    });
    socket.on("fetchData", () => {
      socket_fetchData(socket, io);
      console.log("\n");
      logSuccess("[+] /transactions/all::GET ", " From Socket Connection. ");
    });
    socket.on("fetchDateRangeData", (data) => {
      socket_getTransactionsByTimeRange(socket, io, data);
      console.log("\n");
      logSuccess(
        "[+] /transactions/range::GET ",
        " " +
          new Date(data.from).toLocaleDateString() +
          " to " +
          new Date(data.to).toLocaleDateString() +
          " From Socket Connection. "
      );
    });
  });
  io.on("disconnect", (socket) => {
    console.log("\n");
    logInfo("[+] Socket Server Disconnected.");
  });

  server.listen(port, () => {
    logSuccess("[+] HTTP Server is listening on port ", port);
    logSuccess("[+] Socket Server is listening on port ", port);
    logSuccess("[+] Server Successfully Started ");
    console.log("\n");
  });
});

export { io };
