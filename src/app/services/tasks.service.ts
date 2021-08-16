import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from '../interface/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = []

private url = 'https://tasktracker-78619-default-rtdb.firebaseio.com/'

constructor(private http: HttpClient) { }

  getTasks() {
    this.tasks = []
    this.http.get<Task[]>(`${this.url}/tasks.json`).subscribe(data => {
      for (let task in data) {
        this.tasks.push({
          text: data[task].text,
          id: task,
          done: data[task].done
        })
      }
    })
    return this.tasks
  }

  addTask(task: Task): Observable<Task> {  
    console.log('caos');
    return this.http.post<Task>(`${this.url}tasks.json`, task, httpOptions)
  }

  editTask(editData: {task: Task, text: string} ): Observable<Task> {
    const newTask = editData.task
    newTask.text = editData.text
    
    return this.http.put<Task>(`${this.url}tasks/${editData.task.id}.json`, editData)
  }

  deleteTask(taskId?: string): Observable<Task> {
    console.log(taskId);
    return this.http.delete<Task>(`${this.url}tasks/${taskId}.json`)
  }

  getWantedTask(id: string) {
    return this.tasks.filter(task => {
      return task.id === id
    })
  }
}
