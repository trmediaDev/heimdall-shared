"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUtils = void 0;
const bson_1 = require("bson");
var MongoUtils;
(function (MongoUtils) {
    function toObjectId(oid) {
        return oid instanceof bson_1.ObjectId ? oid : new bson_1.ObjectId(oid);
    }
    MongoUtils.toObjectId = toObjectId;
    function oidToString(oid) {
        return toObjectId(oid).toHexString();
    }
    MongoUtils.oidToString = oidToString;
    function isOID(oid) {
        return bson_1.ObjectId.isValid(oid);
    }
    MongoUtils.isOID = isOID;
})(MongoUtils = exports.MongoUtils || (exports.MongoUtils = {}));
