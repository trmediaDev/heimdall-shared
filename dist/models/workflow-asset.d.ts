import { ObjectId } from 'mongodb';
import { AssetType } from './asset-type';
export declare class WorkflowAsset {
    assetId: ObjectId;
    type: AssetType;
}
