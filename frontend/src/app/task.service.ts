import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webrequest: WebrequestService) {}

  createList(title: string) {
    //we want to create a web request to create a list
    return this.webrequest.post('lists', { title });
  }

  getList() {
    return this.webrequest.get('lists');
  }

  getTasks(listId: Object) {
    return this.webrequest.get(`lists/${listId}/tasks`);
  }

  createTasks(title: string, listId: Object) {
    console.log(listId, title);
    return this.webrequest.post(`lists/${listId}/tasks`, { title });
  }
}
