"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempAssetDBObject = exports.AssetDBObject = exports.Asset = exports.Variants = exports.ImageVariantsObject = exports.AssetPatchRequest = exports.AssetFindRequest = void 0;
const bson_1 = require("bson");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const asset_type_1 = require("./asset-type");
/// Asset Find request
class AssetFindRequest {
}
__decorate([
    (0, class_validator_1.IsEnum)(asset_type_1.AssetType),
    (0, class_validator_1.IsOptional)()
], AssetFindRequest.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], AssetFindRequest.prototype, "filename", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], AssetFindRequest.prototype, "readableFilename", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], AssetFindRequest.prototype, "originalFilename", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], AssetFindRequest.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsOptional)()
], AssetFindRequest.prototype, "categorySubcategories", void 0);
exports.AssetFindRequest = AssetFindRequest;
/// Asset Patch Request
class AssetPatchRequest {
}
__decorate([
    (0, class_validator_1.IsEnum)(asset_type_1.AssetType),
    (0, class_validator_1.IsOptional)()
], AssetPatchRequest.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], AssetPatchRequest.prototype, "mimeType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], AssetPatchRequest.prototype, "readableFilename", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], AssetPatchRequest.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], AssetPatchRequest.prototype, "showInPublicSearch", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], AssetPatchRequest.prototype, "originalFilename", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)()
], AssetPatchRequest.prototype, "keywords", void 0);
__decorate([
    (0, class_validator_1.IsOptional)()
], AssetPatchRequest.prototype, "templateAssetCount", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], AssetPatchRequest.prototype, "isPremium", void 0);
exports.AssetPatchRequest = AssetPatchRequest;
/// Asset Variation
class ImageVariantsObject {
}
exports.ImageVariantsObject = ImageVariantsObject;
class Variants {
}
exports.Variants = Variants;
//
//************* */
//Asset Model
//************** */
//
class Asset {
}
__decorate([
    (0, class_validator_1.IsEnum)(asset_type_1.AssetType)
], Asset.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], Asset.prototype, "filename", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], Asset.prototype, "readableFilename", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "originalFilename", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "mimeType", void 0);
__decorate([
    (0, class_validator_1.IsArray)()
], Asset.prototype, "keywords", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => bson_1.ObjectId),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "cachedServerId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "cachedFilepath", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "thumbnailName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "cachedThumbnailpath", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "section", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "fileId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "se", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "compiledSvgPath", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "compiledSvgName", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "repetable", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "archived", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "disabled", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "showInPublicSearch", void 0);
__decorate([
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "templateAssetCount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "width", void 0);
__decorate([
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "aspectRatio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "uploadedForTemplateId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "usedByTemplateIds", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "isPremium", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)()
], Asset.prototype, "published", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "uploadedBy", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)()
], Asset.prototype, "modifiedBy", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date)
], Asset.prototype, "createdDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date)
], Asset.prototype, "updatedDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Variants)
], Asset.prototype, "variants", void 0);
exports.Asset = Asset;
class AssetDBObject extends Asset {
}
__decorate([
    (0, class_transformer_1.Type)(() => bson_1.ObjectId)
], AssetDBObject.prototype, "_id", void 0);
exports.AssetDBObject = AssetDBObject;
class TempAssetDBObject extends Asset {
}
__decorate([
    (0, class_transformer_1.Type)(() => bson_1.ObjectId)
], TempAssetDBObject.prototype, "_id", void 0);
exports.TempAssetDBObject = TempAssetDBObject;
