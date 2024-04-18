import { AssetType } from './asset-type';
import { CategorySubcategory } from './categorysubcategory';
export declare class AssetFindRequest {
    type?: AssetType;
    filename?: string | RegExp;
    readableFilename?: string;
    originalFilename?: string;
    description?: string;
    categorySubcategories?: CategorySubcategory[];
}
