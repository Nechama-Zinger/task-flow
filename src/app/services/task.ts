import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSignal = signal<Task[]>([]);

  // חשיפת הסיגנל לקריאה בלבד עבור הרכיבים
  readonly tasks = this.tasksSignal.asReadonly();

  constructor() { }

  // פונקציה להוספת משימה חדשה
  addTask(newTask: Task) {
    this.tasksSignal.update(oldTasks => [...oldTasks, newTask]);
  }

  // פונקציה למחיקת משימה
  deleteTask(taskId: string) {
    this.tasksSignal.update(oldTasks => oldTasks.filter(t => t.id !== taskId));
  }
}