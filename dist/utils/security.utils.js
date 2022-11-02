"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityUtils = void 0;
const bcrypt = require("bcrypt");
var SecurityUtils;
(function (SecurityUtils) {
    function getSalt() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt.genSaltSync(4);
        });
    }
    SecurityUtils.getSalt = getSalt;
    function hashPassword(password, salt) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!salt) {
                salt = yield getSalt();
            }
            var hash = yield bcrypt.hashSync(password, salt);
            ;
            return hash;
        });
    }
    SecurityUtils.hashPassword = hashPassword;
    function compare(hashedPassword, doubleHashedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            var isEqual = yield bcrypt.compare(hashedPassword, doubleHashedPassword);
            return isEqual;
        });
    }
    SecurityUtils.compare = compare;
})(SecurityUtils = exports.SecurityUtils || (exports.SecurityUtils = {}));
