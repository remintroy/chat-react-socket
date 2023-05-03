"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 5000;
const io = new socket_io_1.Server(8082, {
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
//# sourceMappingURL=index.js.map