import { TaskType } from '../TaskType';
import { TASKS } from './../task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.apiUrl)
  }

  delTasks(task: TaskType): Observable<TaskType>{
    const url = this.apiUrl + "/" + task.id;
    return this.http.delete<TaskType>(url)
  }

  changeReminderStatus(task: TaskType): Observable<TaskType> {
    const url = this.apiUrl + '/' + task.id;
    return this.http.put<TaskType>(url, task, headers)
  }

  createTask(task: TaskType): Observable<TaskType> {
    return this.http.post<TaskType>(this.apiUrl, task, headers)
  }
}
