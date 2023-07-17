import { Component } from '@angular/core';
import { TaskType } from 'src/app/TaskType';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: TaskType[] = [];



  constructor(
    private taskService: TasksService,
    private router: Router
  ) {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  delTask(task: TaskType) {
    this.taskService.delTasks(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
    })
  }

  updateReminder(task: TaskType) {
    task.reminder = !task.reminder;
    this.taskService.changeReminderStatus(task).subscribe()
  }

  addTask(task: TaskType) {
    this.taskService.createTask(task).subscribe((newTask) => {
      this.tasks.push(newTask)
    })
  }

  hasRoute(route: string): boolean {
    return (this.router.url === route)
  }
}
