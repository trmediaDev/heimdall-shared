import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { AssetType } from './asset-type';
import { CategorySubcategory } from './categorysubcategory';

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
