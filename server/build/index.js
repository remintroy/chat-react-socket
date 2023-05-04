"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
const configs_1 = __importDefault(require("./configs"));
const express_2 = __importDefault(require("./frameworks/webserver/express"));
const connection_1 = __importDefault(require("./frameworks/webserver/connection"));
const routes_1 = __importDefault(require("./frameworks/webserver/routes"));
const connection_2 = __importDefault(require("./frameworks/mongodb/connection"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
(0, connection_2.default)(mongoose_1.default, configs_1.default).connectToMongodb();
(0, express_2.default)(app, configs_1.default);
(0, routes_1.default)(app, express_1.default, configs_1.default);
(0, connection_1.default)(server, configs_1.default).startServer();
//# sourceMappingURL=index.js.map