import { Task } from './task';
import { ObjectId } from 'bson';
import { WorkflowAsset } from './workflow-asset';
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
    tasks: Task[];
    assets: WorkflowAsset[];
    createdDate: Date;
    completedDate: Date;
}
