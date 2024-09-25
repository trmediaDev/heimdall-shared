import { ObjectId } from 'mongodb';
import { TaskType } from './task-type';
export declare type TaskData = any;
export declare enum TaskState {
    CREATED = "CREATED",
    STARTED = "STARTED",
    FAILED = "FAILED",
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED"
}
export declare class Task {
    _id: ObjectId;
    workflowId: ObjectId;
    type: TaskType;
    state: TaskState;
    createdDate: Date;
    cannotCompleteWorkflowOnComplete: boolean;
    completedDate?: Date;
    data?: TaskData;
}
