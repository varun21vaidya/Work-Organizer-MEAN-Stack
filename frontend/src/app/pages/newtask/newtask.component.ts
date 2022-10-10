import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
})
export class NewtaskComponent implements OnInit {
  constructor(
    private taskservice: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  createNewTask(title: string) {

    // get list id from route param observable
    this.route.params.subscribe((params: Params) => {
      console.log(title, params['listId']);

      // from taskservice subscribe to createTasks method to send title and route parameter
      this.taskservice
        .createTasks(title, params['listId'])
        .subscribe((response: any) => {
        });
    });
  }
}
