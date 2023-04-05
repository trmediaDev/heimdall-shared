import { Task } from './task';
import { ObjectId } from 'bson';
import { WorkflowAsset } from './workflow-asset';
import { WorkflowType } from './workflow-type';
export declare enum WorkflowState {
    CREATED = "CREATED",
    STARTED = "STARTED",
    FAILED = "FAILED",
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED"
}
export declare class Workflow {
    _id: ObjectId;
    state: WorkflowState;
    type: WorkflowType;
    tasks: Task[];
    assets: WorkflowAsset[];
    createdDate: Date;
    completedDate?: Date;
}
