import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  someArray: Array<any>;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.someArray = [1, 2, 3];
    this.requestService.getShots().subscribe();
  }

  pushToSomeArray() {
    this.someArray.push(1);
  }

}
