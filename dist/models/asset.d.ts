import { ObjectId } from 'mongodb';
import { AssetType } from './asset-type';
import { CategorySubcategory } from './categorysubcategory';
import { Variants } from './asset.variants';
export declare class Asset {
    type: AssetType;
    /**
     * This is used as the file name when storing the file on GCP
     * or on local disk. filename consist of mongo oid + extension
     */
    filename: string;
    readableFilename: string;
    originalFilename?: string;
    description?: string;
    mimeType?: string;
    keywords: string[];
    /** Right after an upload or file reload from GCS/S3 , this field will be generated by the server that handled the request */
    cachedServerId?: ObjectId;
    cachedFilepath?: string;
    thumbnailName?: string;
    cachedThumbnailpath?: string;
    parentFolderId?: string;
    fileId?: string;
    se?: string;
    compiledSvgPath?: string;
    compiledSvgName?: string;
    repetable?: boolean;
    archived?: boolean;
    disabled?: boolean;
    showInPublicSearch?: boolean;
    templateAssetCount?: number;
    height?: number;
    width?: number;
    aspectRatio?: number;
    uploadedForTemplateId?: ObjectId;
    usedByTemplateIds?: ObjectId[];
    isPremium?: boolean;
    published?: boolean;
    uploadedBy?: ObjectId;
    modifiedBy?: ObjectId;
    createdDate: Date;
    updatedDate: Date;
    variants?: Variants;
    embedding?: number[];
}
export declare class AssetDBObject extends Asset {
    _id: ObjectId;
}
export declare class AssetFindRequest {
    type?: AssetType;
    filename?: string | RegExp;
    readableFilename?: string;
    originalFilename?: string;
    description?: string;
    categorySubcategories?: CategorySubcategory[];
}
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
}
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
}
export declare class TempAssetDBObject extends Asset {
    _id: ObjectId;
    filePath: string;
}
