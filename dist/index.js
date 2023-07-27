"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
require('dotenv').config();
const app = express();
// import {usermodule} from './models/user';
const user_route_1 = require("./routes/user_route");
const database_conn_1 = require("./database_conn");
// import swaggerJSdoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';
const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const session = require('express-session');
const path = __importStar(require("path"));
const redis = require('redis');
const connectRedis = require('connect-redis');
const yamljs_1 = __importDefault(require("yamljs"));
const swaggerDocument = yamljs_1.default.load(path.join(__dirname, './swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const redisClient = redis.createClient();
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API FOR MONGODB',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:3000/'
            }
        ]
    },
    apis: ['./routes/user_route.ts']
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", user_route_1.router);
(0, database_conn_1.dbconn)();
app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    // dbconn();
    console.log(`server listing on ${process.env.PORT}`);
}));
// const swaggerspec= swaggerJSdoc(options)
// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerspec))
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
