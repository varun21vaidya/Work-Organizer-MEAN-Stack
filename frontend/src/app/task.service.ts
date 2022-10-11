import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webrequest: WebrequestService) {}

  getList() {
    return this.webrequest.get('lists');
  }

  getTasks(listId: Object) {
    return this.webrequest.get(`lists/${listId}/tasks`);
  }

  createList(title: string) {
    //we want to create a web request to create a list
    return this.webrequest.post('lists', { title });
  }

  createTasks(title: string, listId: Object) {
    return this.webrequest.post(`lists/${listId}/tasks`, { title });
  }

  deleteTask(listId: Object, taskId: object) {
    return this.webrequest.delete(`lists/${listId}/tasks/${taskId}`);
  }

  deleteList(listId: Object) {
    return this.webrequest.delete(`lists/${listId}`);
  }

  EditList(title: string, listId: Object) {
    return this.webrequest.put(`lists/${listId}`, { title });
  }

  Edittask(title: string, listId: Object, taskId: object) {
    return this.webrequest.put(`lists/${listId}/tasks/${taskId}`, { title });
  }
}
