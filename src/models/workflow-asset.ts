import { ObjectId } from 'bson';
import { AssetType } from './asset-type';

export class WorkflowAsset {
    assetId: ObjectId;
    type: AssetType;
}
