"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflow = exports.WorkflowState = void 0;
var WorkflowState;
(function (WorkflowState) {
    WorkflowState["CREATED"] = "CREATED";
    WorkflowState["STARTED"] = "STARTED";
    WorkflowState["FAILED"] = "FAILED";
    WorkflowState["CANCELED"] = "CANCELED";
    WorkflowState["COMPLETED"] = "COMPLETED";
})(WorkflowState = exports.WorkflowState || (exports.WorkflowState = {}));
class Workflow {
}
exports.Workflow = Workflow;
