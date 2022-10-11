import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  // we want to create an array of lists
  lists: any;
  tasks: any;
  currentRoute: any;
  constructor(
    private taskservice: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this will constantly keep the list and tasks updated when refreshed
    // as we are getting lists and tasks when application is running itself with ngOnInit

    this.route.params.subscribe((params: Params) => {
      // console.log(params);
      if (params['listId']) {
        this.taskservice.getTasks(params['listId']).subscribe((tasks) => {
          if (this.tasks.length) this.tasks = tasks;
          this.currentRoute = params['listId'];
        });
      }
    });

    this.taskservice.getList().subscribe((lists) => {
      this.lists = lists;
    });
  }

  // When delete is clicked it will take params of listid and taskid and using service deleteList delete the respective task
  deleteThisTask() {
    this.route.params.subscribe((params: Params) => {
      // console.log('deleting..', params['listId'], params['taskId']);

      // from taskservice subscribe to createTasks method to send title and route parameter
      this.taskservice
        .deleteTask(params['listId'], params['taskId'])
        .subscribe((response: any) => {});
    });
  }

  // When delete is clicked it will take params of listid and using service deleteList delete the respective list
  deleteThisList() {
    this.route.params.subscribe((params: Params) => {
      // console.log('deleting..', params['listId']);
      this.router.navigate(['/lists']);
      // from taskservice subscribe to createTasks method to send title and route parameter
      this.taskservice
        .deleteList(params['listId'])
        .subscribe((response: any) => {});
    });
  }

  // to get link of params of task id we will redirect the button click to EditThisTask ie when this is clicked
  // from ts file it will navigate to lists/:listId/tasks/:taskId/edittask and go to edit task component

  RouteToEdit() {
    this.route.params.subscribe((params: Params) => {
      // console.log('Editing..', params['listId'], params['taskId']);

      // from taskservice subscribe to createTasks method to send title and route parameter
      this.router.navigate([
        '/lists',
        params['listId'],
        'tasks',
        params['taskId'],
        'edittask',
      ]);
    });
  }
}
