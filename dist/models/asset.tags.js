"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagDbObject = exports.Tag = exports.TagProvider = void 0;
var TagProvider;
(function (TagProvider) {
    TagProvider["GOOGLE"] = "google";
    TagProvider["MANUAL"] = "manual";
})(TagProvider || (exports.TagProvider = TagProvider = {}));
class Tag {
}
exports.Tag = Tag;
class TagDbObject extends Tag {
}
exports.TagDbObject = TagDbObject;
class TagUsageRecord {
}
class TagUsageRecordDbObject extends TagUsageRecord {
}
class AssetClassTag {
}
