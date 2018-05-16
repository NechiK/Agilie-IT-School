import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';

const profileRoutes: Routes = [
  {path: '', component: ProfileComponent}
];

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class ProfileModule { }
