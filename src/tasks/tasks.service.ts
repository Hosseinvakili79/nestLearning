import { Injectable } from '@nestjs/common';
import { Task, Taskstatus } from './task.model';
import { v10 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[];

  getAllTasks(): Task[] {
    return this.tasks;
  }
  creatTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid,
      title,
      description,
      status: Taskstatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
