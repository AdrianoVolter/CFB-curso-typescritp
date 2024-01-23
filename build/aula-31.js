"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Classes_1 = require("./Classes");
const Classes_2 = __importDefault(require("./Classes"));
const p1 = new Classes_2.default('John', 1.88);
const o1 = new Classes_1.Objeto('Mesa');
console.log(p1);
console.log(o1);
console.log(Classes_1.Coisas);
