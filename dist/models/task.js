"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.TaskState = void 0;
var TaskState;
(function (TaskState) {
    TaskState["CREATED"] = "CREATED";
    TaskState["STARTED"] = "STARTED";
    TaskState["FAILED"] = "FAILED";
    TaskState["CANCELED"] = "CANCELED";
    TaskState["COMPLETED"] = "COMPLETED";
})(TaskState = exports.TaskState || (exports.TaskState = {}));
class Task {
}
exports.Task = Task;
