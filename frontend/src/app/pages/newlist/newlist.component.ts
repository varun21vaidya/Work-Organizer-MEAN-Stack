import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.scss']
})
export class NewlistComponent implements OnInit {

  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
  }
  createNewList(title: string) {
    this.taskservice.createList(title).subscribe((response:any) => {
      // console.log(response);

      // now we navigate to /lists/response._id
    });
  }
}
