import { join } from 'path';
import { imageVariantOptions } from '../models/asset.variants';
import { AssetDBObject } from '../models/asset';

export class AssetHelpers {
    static buildOriginalFilePath(asset: AssetDBObject): string | undefined {
        if (!asset.parentFolderId || !asset.fileId || !asset.filename) return undefined;
        return join(asset.parentFolderId, asset.fileId, asset.filename);
    }

    static buildVariantFilePath(asset: AssetDBObject, variantName: string): string | undefined {
        if (asset.variants && asset.variants[variantName]) {
            return join(asset.parentFolderId!, asset.fileId!, asset!.variants[variantName]?.filename);
        }
        return undefined;
    }

    static getClosestVariantNameIfMissing(asset: AssetDBObject, variantName: string): string {
        if (asset.variants) {
            if (!asset.variants[variantName]) {
                const optionLargeToSmall = [...imageVariantOptions].reverse();
                for (const option of optionLargeToSmall) {
                    if (asset.variants[option.name]) {
                        return option.name;
                    }
                }
            }
        }
        return variantName;
    }

    static buildThumbnailPath(asset: AssetDBObject): string | undefined {
        return this.buildVariantFilePath(asset, 'thumb');
    }
}
