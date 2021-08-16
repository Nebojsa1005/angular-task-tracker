import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/interface/Task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = []
  editOn: boolean = false
  editText: string = ''

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks()
  }

  edit() {
    this.editOn = true
  }
  
  onEdit(taskId?: string) {
    const  wantedTask = this.tasks.filter((task: Task) => {
      return task.id === taskId
    })

    const editData = {
      task: wantedTask[0],
      text: this.editText
    }

    this.tasksService.editTask(editData).subscribe(data => console.log(data))
    this.editOn = false
  }

  onDelete(taskId?: string) {
    this.tasksService.deleteTask(taskId).subscribe()
    this.tasks = []
    this.tasksService.getTasks()           
  }

}
