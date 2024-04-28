import { IsArray, IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { AssetType } from './asset-type';

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
