"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDBObject = exports.ServerStatus = exports.ServerCapabilityStatus = exports.ServerCapability = void 0;
var ServerCapability;
(function (ServerCapability) {
    ServerCapability["STORAGE"] = "storage";
    ServerCapability["API"] = "api";
})(ServerCapability = exports.ServerCapability || (exports.ServerCapability = {}));
class ServerCapabilityStatus {
}
exports.ServerCapabilityStatus = ServerCapabilityStatus;
/**
 * Each property on this class has a 1:1 mapping to value of ServerCapability enum
 */
class ServerStatus {
}
exports.ServerStatus = ServerStatus;
class Server {
}
exports.default = Server;
class ServerDBObject extends Server {
}
exports.ServerDBObject = ServerDBObject;
