import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any = []

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().pipe(map(data => {
      for (let task in data) {
        this.tasks.push({
          text: data[task].text,
          id: task,
          done: data[task].done
        })
      }
    }))
    .subscribe( data => console.log(data)
    )
  } 

}
