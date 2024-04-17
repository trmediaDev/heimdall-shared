import { ObjectId } from 'mongodb';
export declare enum TagProvider {
    GOOGLE = "google"
}
export declare class Tag {
    _id: ObjectId;
    name: string;
    providers: [TagProvider];
}
