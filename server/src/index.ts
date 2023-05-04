import express from "express";
import mongoose from "mongoose";
import http from "http";
import getConfigs from "./configs";
import expressConfig from "./frameworks/webserver/express";
import serverConfig from "./frameworks/webserver/connection";
import routes from "./frameworks/webserver/routes";
import mongoDbConnection from "./frameworks/mongodb/connection";

const app = express();
const server = http.createServer(app);

mongoDbConnection(mongoose, getConfigs).connectToMongodb();

expressConfig(app, getConfigs);

routes(app, express, getConfigs);

serverConfig(server, getConfigs).startServer();
