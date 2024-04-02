import { ObjectId } from 'mongodb';
import { AssetType } from './asset-type';

export class WorkflowAsset {
    assetId: ObjectId;
    type: AssetType;
}
