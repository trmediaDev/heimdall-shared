import { ObjectId } from 'mongodb';
import { AssetType } from './asset-type';
export enum TagProvider {
    GOOGLE = 'google',
}

export class Tag {
    name?: string;
    providers?: [TagProvider];
}
export class TagDbObject extends Tag {
    _id: ObjectId;
}

class TagUsageRecord {
    _id: ObjectId;
    tagId: ObjectId;
    accessedDate: Date;
}
class TagUsageRecordDbObject extends TagUsageRecord {
    _id: ObjectId;
    tagId: ObjectId;
    accessedDate: Date;
}
class AssetClassTag {
    assetClassType: AssetType;
    tagId: ObjectId;
    order: number;
}
