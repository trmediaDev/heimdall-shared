import { AssetType } from './asset-type';
export declare class AssetPatchRequest {
    type?: AssetType;
    mimeType?: string;
    readableFilename?: string;
    description?: string;
    showInPublicSearch?: boolean;
    originalFilename?: string;
    keywords?: [];
    templateAssetCount?: number;
    isPremium?: boolean;
    foreign?: boolean;
}
