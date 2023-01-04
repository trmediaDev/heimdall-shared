import { ObjectId } from 'bson';
import { AssetType } from './asset-type';
import { CategorySubcategory } from './categorysubcategory';
export declare class AssetFindRequest {
    type?: AssetType;
    filename?: string | RegExp;
    readableFilename?: string;
    description?: string;
    categorySubcategories?: CategorySubcategory[];
}
export declare class AssetPostRequest {
    type: AssetType;
    readableFilename: string;
    description?: string;
    repetable?: boolean;
    keywords?: [];
}
export declare class AssetPatchRequest {
    type?: AssetType;
    readableFilename?: string;
    description?: string;
    keywords?: [];
}
export declare class Asset {
    type: AssetType;
    /**
     * This is used as the file name when storing the file on GCP
     * or on local disk. filename consist of mongo oid + extension
     */
    filename: string;
    readableFilename: string;
    description?: string;
    keywords: string[];
    /** Right after an upload or file reload from GCS/S3 , this field will be generated by the server that handled the request */
    cachedServerId?: ObjectId;
    cachedFilepath?: string;
    cachedThumbnailpath?: string;
    thumbnailName?: string;
    repetable?: boolean;
    disabled?: boolean;
    createdDate: Date;
    updatedDate: Date;
}
export declare class AssetDBObject extends Asset {
    _id: ObjectId;
}
