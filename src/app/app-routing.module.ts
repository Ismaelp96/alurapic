import { SignupComponent } from './home/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListResolver } from './components/photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { SigninComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
  },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
