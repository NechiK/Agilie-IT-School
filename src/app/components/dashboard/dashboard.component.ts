import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getShots().subscribe();
  }

}
