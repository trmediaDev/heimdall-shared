import { Task } from './task';
import { ObjectId } from 'bson';
import { WorkflowAsset } from './workflow-asset';

export enum WorkflowState {
    CREATED = 'CREATED',
    STARTED = 'STARTED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED',
    COMPLETED = 'COMPLETED',
}

export class Workflow {
    _id: ObjectId;
    state: WorkflowState;
    tasks: Task[];
    assets: WorkflowAsset[];
    createdDate: Date;
    completedDate: Date;
}
