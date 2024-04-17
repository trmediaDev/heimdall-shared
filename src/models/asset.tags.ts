import { ObjectId } from 'mongodb';
export enum TagProvider {
    GOOGLE = 'google',
}

export class Tag {
    _id: ObjectId;
    name: string;
    providers: [TagProvider];
}
class TagUsageRecord {
    _id: ObjectId;
    tagId: ObjectId;
    accessedDate: Date;
}
