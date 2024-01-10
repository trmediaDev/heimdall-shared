"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetHelpers = void 0;
const path_1 = require("path");
const asset_variants_1 = require("../models/asset.variants");
class AssetHelpers {
    static buildOriginalFilePath(asset) {
        if (!asset.parentFolderId || !asset.fileId || !asset.filename)
            return undefined;
        return (0, path_1.join)(asset.parentFolderId, asset.fileId, asset.filename);
    }
    static buildVariantFilePath(asset, variantName) {
        var _a;
        if (asset.variants && asset.variants[variantName]) {
            return (0, path_1.join)(asset.parentFolderId, asset.fileId, (_a = asset.variants[variantName]) === null || _a === void 0 ? void 0 : _a.filename);
        }
        return undefined;
    }
    static getClosestVariantNameIfMissing(asset, variantName) {
        if (asset.variants) {
            if (!asset.variants[variantName]) {
                const optionLargeToSmall = [...asset_variants_1.imageVariantOptions].reverse();
                for (const option of optionLargeToSmall) {
                    if (asset.variants[option.name]) {
                        return option.name;
                    }
                }
            }
        }
        return variantName;
    }
    static buildThumbnailPath(asset) {
        return this.buildVariantFilePath(asset, 'thumb');
    }
}
exports.AssetHelpers = AssetHelpers;
