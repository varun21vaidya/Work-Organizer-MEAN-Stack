import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss'],
})
export class EditListComponent implements OnInit {
  constructor(
    private taskservice: TaskService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  EditList(title: string) {
    this.route.params.subscribe((params: Params) => {
      // from taskservice subscribe to EditList method to send title and route parameter
      this.taskservice
        .EditList(title, params['listId'])
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
