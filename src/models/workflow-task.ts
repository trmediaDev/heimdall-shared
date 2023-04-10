import { ObjectId } from 'bson';
import { TaskType } from './task-type';

export class WorkflowTask {
    taskId: ObjectId;
    type: TaskType;
}
