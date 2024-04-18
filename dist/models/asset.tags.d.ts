import { ObjectId } from 'mongodb';
export declare enum TagProvider {
    GOOGLE = "google"
}
export declare class Tag {
    name?: string;
    providers?: [TagProvider];
}
export declare class TagDbObject extends Tag {
    _id: ObjectId;
}
