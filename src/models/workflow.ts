import { ObjectId } from 'bson';
import { WorkflowAsset } from './workflow-asset';
import { WorkflowType } from './workflow-type';
import { WorkflowTask } from './workflow-task';

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
    type: WorkflowType;
    tasks: WorkflowTask[];
    assets: WorkflowAsset[];
    createdDate: Date;
    completedDate?: Date;
}
