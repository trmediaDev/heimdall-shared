import { ObjectId } from 'bson';
import { TaskType } from './task-type';

export type TaskData = any;

export enum TaskState {
    CREATED = 'CREATED',
    STARTED = 'STARTED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED',
    COMPLETED = 'COMPLETED',
}

export class Task {
    _id: ObjectId;
    workflowId: ObjectId;
    type: TaskType;
    state: TaskState;
    createdDate: Date;
    cannotCompleteWorkflowOnComplete: boolean;
    completedDate?: Date;
    data?: TaskData;
}
