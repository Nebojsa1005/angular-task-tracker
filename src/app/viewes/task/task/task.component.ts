import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/interface/Task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: any

  constructor(private route: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.task = this.tasksService.getWantedTask(this.route.snapshot.params.id)
    console.log(this.task);
    
  }
 
  


}
