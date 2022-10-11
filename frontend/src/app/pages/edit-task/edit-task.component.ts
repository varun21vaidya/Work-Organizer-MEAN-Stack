import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  constructor(
    private taskservice: TaskService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  EditThistask(title: string) {
    this.route.params.subscribe((params: Params) => {
      // from taskservice subscribe to Edittask method to send title and route parameter
      this.taskservice
        .Edittask(title, params['listId'], params['taskId'])
        .subscribe((response: any) => {});

      // navigate back to list
      // this calls back function and returns to previous url
      this.back();
    });
  }
  // this method uses javascript location which redirects recent broweser url
  back(): void {
    this.location.back();
  }
}
