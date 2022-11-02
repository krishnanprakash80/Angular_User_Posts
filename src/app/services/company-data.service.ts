import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CompanyDataService {
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  private postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

  constructor(private httpClient: HttpClient) {}

  getAPIData() {
    return this.httpClient.get(this.userUrl);
  }

  getUserPosts(userid) {
    return this.httpClient.get(this.postUrl + userid);
  }
}
