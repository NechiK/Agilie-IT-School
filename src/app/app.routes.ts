import {Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AlbumComponent} from './components/album/album.component';
import {AlbumsComponent} from './components/albums/albums.component';

export const ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'albums', component: AlbumsComponent, children: [
      {path: ':albumId', component: AlbumComponent}
    ]}
];
