import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  // we want to create an array of lists
  lists: any;
  tasks:any;
  currentRoute:any;
  constructor(
    private taskservice: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.taskservice.getTasks(params['listId']).subscribe(tasks=>{
        this.tasks=tasks
        this.currentRoute=params['listId'];
      })
    });

    this.taskservice.getList().subscribe(lists=>{
      this.lists=lists;
    })
  }
}
