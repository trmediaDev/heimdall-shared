"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
const crypto = require("crypto");
var StringUtils;
(function (StringUtils) {
    function random() {
        return crypto.randomBytes(20).toString('hex');
    }
    StringUtils.random = random;
})(StringUtils = exports.StringUtils || (exports.StringUtils = {}));
