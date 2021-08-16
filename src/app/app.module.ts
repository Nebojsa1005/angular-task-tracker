import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './viewes/home/home.component'; 
import { NewTaskComponent } from './viewes/newTask/newTask/newTask.component';
import { TaskComponent } from './viewes/task/task/task.component';
import { TaskListComponent } from './viewes/newTask/components/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewTaskComponent },
  { path: ':id', component: TaskComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewTaskComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
