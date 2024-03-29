import { GlobalErrorComponent } from './errors/global-error/global-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListResolver } from './components/photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { PhotoDetailsComponent } from './components/photos/photo-details/photo-details.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
    data: {
      title: 'Timeline',
    },
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Photo upload',
    },
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailsComponent,
    data: {
      title: 'Photo detail',
    },
  },
  {
    path: 'error',
    component: GlobalErrorComponent,
    data: {
      title: 'Error',
    },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not found',
    },
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
