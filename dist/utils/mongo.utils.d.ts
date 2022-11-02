import { ObjectId } from 'bson';
export declare type MongoOID = string | ObjectId;
export declare type StringOrRegEx = string | RegExp;
export declare namespace MongoUtils {
    function toObjectId(oid: MongoOID): ObjectId;
    function oidToString(oid: MongoOID): string;
    function isOID(oid: MongoOID): boolean;
}
