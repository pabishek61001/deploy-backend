import express, { response, text } from "express";
import mysql from "mysql";
import cors from "cors";
import http, { request } from "http";


const app = express();

const server = http.createServer(app);

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).send("backend connected success");
});


const port = process.env.PORT | 4000;
server.listen(port, () => {
  console.log("Node js is running on the port", port);
});
