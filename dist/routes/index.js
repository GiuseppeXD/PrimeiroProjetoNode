"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointments_1 = __importDefault(require("./appointments"));
var routes = express_1.Router();
routes.use('/appointments', appointments_1.default);
exports.default = routes;
