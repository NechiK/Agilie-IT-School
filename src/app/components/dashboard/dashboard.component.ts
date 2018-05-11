import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  msg: '';


  constructor(public authService: AuthService, private afDb: AngularFireDatabase) {}

  ngOnInit() {
    this.items = this.getMessages().valueChanges();
  }
  getMessages() {
    return this.afDb.list('messages');
  }

  sendMessage(msg: string) {
    const user = this.authService.getUser();
    this.itemsRef = this.getMessages();
    this.itemsRef.push({
      timeStamp: this.getTimeStamp(),
      message: msg,
      userName: user.name,
      email: user.email
    });
    this.msg = '';
  }
  removeMessage(message) {
    this.itemsRef = this.getMessages();
    this.itemsRef.remove(message);
  }
  getTimeStamp() {
    const now = new Date();
    let date, time;
    date = now.getUTCFullYear() + '/' + now.getUTCMonth() + '/' + now.getUTCDate();
    time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();
    return date + ' ' + time;
  }

}
