import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstListComponent } from './components/first-list/first-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPostsComponent } from './components/user-posts/user-posts.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, FirstListComponent, UserPostsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
