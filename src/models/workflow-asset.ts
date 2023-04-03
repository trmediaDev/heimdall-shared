import { ObjectId } from 'bson';
import { UploadAssetType } from './upload-asset-type';

export class WorkflowAsset {
    type: UploadAssetType;
    assetId: ObjectId;
}
