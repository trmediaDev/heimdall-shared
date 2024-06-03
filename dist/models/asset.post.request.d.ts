import { AssetType } from './asset-type';
export declare class AssetPostRequest {
    type: AssetType;
    readableFilename: string;
    description?: string;
    mimeType?: string;
    repetable?: boolean;
    showInPublicSearch?: boolean;
    isPremium?: boolean;
    keywords?: [];
    originalFilename?: string;
    templateAssetCount?: number;
    assetCount?: number;
    foreign?: boolean;
    stitchable?: boolean;
    collageLayoutType?: string;
}
