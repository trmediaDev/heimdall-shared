import { IsArray, IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { AssetType } from './asset-type';

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
