import { ObjectId } from 'bson';
import { TaskType } from './task-type';
declare type TaskData = any;
export declare enum TaskState {
    CREATED = "CREATED",
    STARTED = "STARTED",
    FAILED = "FAILED",
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED"
}
export declare class Task {
    _id: ObjectId;
    type: TaskType;
    state: TaskState;
    createdDate: Date;
    cannotCompleteWorkflowOnComplete: boolean;
    completedDate: Date;
    data: TaskData;
}
export {};
