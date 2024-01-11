import { AssetDBObject } from '../models/asset';
export declare class AssetHelpers {
    static buildOriginalFilePath(asset: AssetDBObject): string | undefined;
    static buildVariantFilePath(asset: AssetDBObject, variantName: string): string | undefined;
    static getClosestVariantNameIfMissing(asset: AssetDBObject, variantName: string): string;
    static buildThumbnailPath(asset: AssetDBObject): string | undefined;
}
