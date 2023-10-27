"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var router_1 = __importDefault(require("./router"));
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
app.use(router_1.default);
server.listen(4444, function () { return console.log('Stripe Dev Server listening on 4444...'); });
