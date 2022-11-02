import { Component, Input, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  postsData: any
  @Input() userId;
  constructor(private getData: CompanyDataService) { }

  ngOnInit() {
    this.getData.getUserPosts(this.userId).subscribe((response) => {
      this.postsData = response;
    });
  }

}