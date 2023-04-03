import { ObjectId } from 'bson';
import { UploadAssetType } from './upload-asset-type';

export class WorkflowAsset {
    _id: ObjectId;
    type: UploadAssetType;
    createdDate: Date;
}
