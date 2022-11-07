import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  postsData: any;
  @Input() userId;
  constructor(private getData: CompanyDataService) {}

  ngOnInit() {
    if (this.userId) {
      console.log('init' + this.userId);
    } else console.log('Just Init');
  }

  ngOnChanges(changes: SimpleChange) {
    if (this.userId) {
      console.log('on Change' + this.userId);
      this.getData.getUserPosts(this.userId).subscribe((response) => {
        this.postsData = response;
      });
    } else console.log('Just change' + SimpleChange);
  }
}
