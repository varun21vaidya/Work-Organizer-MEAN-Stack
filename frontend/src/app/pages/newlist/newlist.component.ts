import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.scss'],
})
export class NewlistComponent implements OnInit {
  constructor(private taskservice: TaskService, private location: Location) {}

  ngOnInit(): void {}
  createNewList(title: string) {
    
    // from taskservice subscribe to createList method to send title and route parameter
    this.taskservice.createList(title).subscribe((response: any) => {});

    // navigate back to list
    // this calls back function and returns to previous url
    this.back();
  }

  // this method uses javascript location which redirects recent broweser url
  back(): void {
    this.location.back();
  }
}
