import {Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AlbumComponent} from './components/album/album.component';
import {AlbumsComponent} from './components/albums/albums.component';

export const ROUTES: Routes = [
  {path: '', component: DashboardComponent,
    data: {
      animation: 'homePage'
    }
  },
  {path: 'profile', loadChildren: './profile.module#ProfileModule'},
  {path: 'albums', component: AlbumsComponent,
    data: {
      animation: 'albumsPage'
    },
    children: [
      {path: ':albumId', component: AlbumComponent}
    ]}
];
