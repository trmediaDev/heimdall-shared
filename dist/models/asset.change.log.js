"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const asset_1 = require("./asset");
const class_transformer_1 = require("class-transformer");
const mongodb_1 = require("mongodb");
var AssetChangeLogType;
(function (AssetChangeLogType) {
    AssetChangeLogType["CREATE"] = "CREATE";
    AssetChangeLogType["UPDATE"] = "UPDATE";
    AssetChangeLogType["DELETE"] = "DELETE";
})(AssetChangeLogType || (AssetChangeLogType = {}));
class AssetChangeLog {
}
__decorate([
    (0, class_transformer_1.Type)(() => asset_1.AssetDBObject)
], AssetChangeLog.prototype, "asset", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => mongodb_1.ObjectId)
], AssetChangeLog.prototype, "assetId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date)
], AssetChangeLog.prototype, "createdDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date)
], AssetChangeLog.prototype, "updatedDate", void 0);
