import { ObjectId } from 'bson';

export type MongoOID = string | ObjectId;
export type StringOrRegEx = string | RegExp;

export namespace MongoUtils {
    export function toObjectId(oid: MongoOID) {
        return oid instanceof ObjectId ? oid : new ObjectId(oid);
    }

    export function oidToString(oid: MongoOID) {
        return toObjectId(oid).toHexString();
    }

    export function isOID(oid: MongoOID) {
        return ObjectId.isValid(oid);
    }
}