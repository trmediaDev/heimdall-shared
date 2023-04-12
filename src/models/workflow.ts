import { ObjectId } from 'bson';
import { WorkflowAsset } from './workflow-asset';
import { WorkflowType } from './workflow-type';

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
    tasks: ObjectId[];
    assets: WorkflowAsset[];
    createdDate: Date;
    completedDate?: Date;
}
