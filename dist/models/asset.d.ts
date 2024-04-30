import { ObjectId } from 'mongodb';
import { AssetType } from './asset-type';
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
    tags?: IAssetTag[];
}
export interface IAssetTag {
    id: ObjectId;
    name: string;
    score?: number;
}
export declare class AssetDBObject extends Asset {
    _id: ObjectId;
}
export declare class TempAssetDBObject extends Asset {
    _id: ObjectId;
    filePath: string;
}
