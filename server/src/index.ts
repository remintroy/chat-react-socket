import express from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;

const io = new Server(8082, {
  cors: {
    origin: ["http://localhost:8081"],
  },
});

io.on("connection", (socket) => {
  socket.emit("welcome", "Hello world");
  socket.on("handshake", (message) => {
    console.log(`Got handshake from ${message}`);
  });
});

app.use((req, res) => {
  res.send("server is running");
});

app.listen(port, () => console.log(`server is listening on ${port}`));
