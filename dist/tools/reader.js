"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
async function read(day) {
    return fs_1.readFileSync(`data/${day}`, { encoding: 'utf8' });
}
exports.default = read;
