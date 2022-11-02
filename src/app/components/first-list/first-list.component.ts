import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-first-list',
  templateUrl: './first-list.component.html',
  styleUrls: ['./first-list.component.css'],
})
export class FirstListComponent implements OnInit {
  compData: any;
  constructor(private getData: CompanyDataService) {}

  ngOnInit() {
   
  }
}
