import { ObjectId } from 'mongodb';
export type MongoOID = string | ObjectId;
export type StringOrRegEx = string | RegExp;
export declare namespace MongoUtils {
    function toObjectId(oid: MongoOID): ObjectId;
    function oidToString(oid: MongoOID): string;
    function isOID(oid: MongoOID): boolean;
}
