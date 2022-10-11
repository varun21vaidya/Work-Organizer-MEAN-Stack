import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NewlistComponent } from './pages/newlist/newlist.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewtaskComponent } from './pages/newtask/newtask.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

@NgModule({
  declarations: [AppComponent, TaskViewComponent, NewlistComponent, LoginPageComponent, NewtaskComponent, EditListComponent, EditTaskComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
