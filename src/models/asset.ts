import { ObjectId } from 'mongodb';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { AssetType } from './asset-type';
import { CategorySubcategory } from './categorysubcategory';
import { Variants } from './asset.variants';
//
//************* */
//Asset Model
//************** */
//

export class Asset {
    @IsEnum(AssetType)
    type: AssetType;
    /**
     * This is used as the file name when storing the file on GCP
     * or on local disk. filename consist of mongo oid + extension
     */
    @IsString()
    filename: string;
    @IsString()
    readableFilename: string;
    @IsString()
    @IsOptional()
    originalFilename?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    mimeType?: string;
    @IsArray()
    keywords: string[];
    /** Right after an upload or file reload from GCS/S3 , this field will be generated by the server that handled the request */
    @Type(() => ObjectId)
    @IsOptional()
    cachedServerId?: ObjectId;
    @IsString()
    @IsOptional()
    cachedFilepath?: string;
    @IsString()
    @IsOptional()
    thumbnailName?: string;
    @IsString()
    @IsOptional()
    cachedThumbnailpath?: string;
    @IsString()
    @IsOptional()
    parentFolderId?: string;
    @IsString()
    @IsOptional()
    fileId?: string;

    @IsString()
    @IsOptional()
    se?: string;

    @IsBoolean()
    @IsOptional()
    compiledSvgPath?: string;

    @IsBoolean()
    @IsOptional()
    compiledSvgName?: string;

    @IsBoolean()
    @IsOptional()
    repetable?: boolean;

    @IsBoolean()
    @IsOptional()
    archived?: boolean;

    @IsBoolean()
    @IsOptional()
    disabled?: boolean;

    @IsBoolean()
    @IsOptional()
    showInPublicSearch?: boolean;

    @IsOptional()
    templateAssetCount?: number;
    @IsNumber()
    @IsOptional()
    height?: number;
    @IsNumber()
    @IsOptional()
    width?: number;
    @IsOptional()
    aspectRatio?: number;

    @IsString()
    @IsOptional()
    uploadedForTemplateId?: ObjectId;
    @IsString()
    @IsOptional()
    usedByTemplateIds?: ObjectId[];

    @IsBoolean()
    @IsOptional()
    isPremium?: boolean;

    @IsBoolean()
    published?: boolean;

    @IsString()
    @IsOptional()
    uploadedBy?: ObjectId;

    @IsBoolean()
    @IsOptional()
    modifiedBy?: ObjectId;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => Variants)
    variants?: Variants;
    embedding?: number[];
}

export class AssetDBObject extends Asset {
    @Type(() => ObjectId)
    _id: ObjectId;
}
/// Asset Find request
export class AssetFindRequest {
    @IsEnum(AssetType)
    @IsOptional()
    type?: AssetType;

    @IsString()
    @IsOptional()
    filename?: string | RegExp;

    @IsString()
    @IsOptional()
    readableFilename?: string;

    @IsString()
    @IsOptional()
    originalFilename?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsArray()
    @ValidateNested()
    @IsOptional()
    categorySubcategories?: CategorySubcategory[];
}

/// Asset Post request
export declare class AssetPostRequest {
    @IsEnum(AssetType)
    type: AssetType;

    @IsString()
    readableFilename: string;

    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    mimeType?: string;

    @IsBoolean()
    @IsOptional()
    repetable?: boolean;

    @IsBoolean()
    @IsOptional()
    showInPublicSearch?: boolean;

    @IsBoolean()
    @IsOptional()
    isPremium?: boolean;

    @IsArray()
    @IsOptional()
    keywords?: [];

    @IsString()
    @IsOptional()
    originalFilename?: string;
    @IsOptional()
    templateAssetCount?: number;
}

/// Asset Patch Request

export class AssetPatchRequest {
    @IsEnum(AssetType)
    @IsOptional()
    type?: AssetType;

    @IsString()
    @IsOptional()
    mimeType?: string;

    @IsString()
    @IsOptional()
    readableFilename?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    showInPublicSearch?: boolean;

    @IsString()
    @IsOptional()
    originalFilename?: string;

    @IsArray()
    @IsOptional()
    keywords?: [];

    @IsOptional()
    templateAssetCount?: number;

    @IsBoolean()
    @IsOptional()
    isPremium?: boolean;
}


export class TempAssetDBObject extends Asset {
    @Type(() => ObjectId)
    _id: ObjectId;
    filePath: string;
}
