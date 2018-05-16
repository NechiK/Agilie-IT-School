import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { AlbumComponent } from './components/album/album.component';
import { AlbumsComponent } from './components/albums/albums.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './services/interceptor.service';
import {RequestService} from './services/request.service';
import {CommonModule} from '@angular/common';
import {LoopDirective} from './directives/loop.directive';
import {RangeDirective} from './directives/range.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlbumComponent,
    AlbumsComponent,
    LoopDirective,
    RangeDirective
  ],
  imports: [
    CommonModule, BrowserAnimationsModule,
    BrowserModule, RouterModule.forRoot(ROUTES), HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
