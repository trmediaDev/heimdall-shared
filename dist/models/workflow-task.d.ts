import { ObjectId } from 'bson';
import { TaskType } from './task-type';
export declare class WorkflowTask {
    taskId: ObjectId;
    type: TaskType;
}
