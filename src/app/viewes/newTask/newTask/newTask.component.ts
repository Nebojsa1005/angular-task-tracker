import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html',
  // template: `
  //   <input type="text" id="name" required [(ngModel)]="newTask">

  // `,
  styleUrls: ['./newTask.component.scss']
})
export class NewTaskComponent implements OnInit {
  text: any = ''
  previous: string = ''

  constructor(private tasksService: TasksService, private route: ActivatedRoute, private router: Router, private location: Location) { }
  tasks: any = []

  ngOnInit() {
    this.tasks = this.tasksService.getTasks()
  }

  submit(): void {
    const newTask = {
      text: this.text,
      done: false
    }
    this.tasksService.addTask(newTask).subscribe(data => console.log(data))
    this.text = ''
  }

  goBack() {
    this.location.back()
    
  }

}
