import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumId: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe (res => {
      console.log('ANOTHER ALBUM');
      this.albumId = this.route.snapshot.paramMap.get('albumId');
    });
  }

}
