import { AssetDBObject } from './asset';
import { Type } from 'class-transformer';
import { ObjectId } from 'bson';

enum AssetChangeLogType {
    CREATE = 'CREATE',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
}

class AssetChangeLog {
    assetChangeLogType: AssetChangeLogType;

    @Type(() => AssetDBObject)
    asset: AssetDBObject;

    @Type(() => ObjectId)
    assetId: ObjectId;
    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}
