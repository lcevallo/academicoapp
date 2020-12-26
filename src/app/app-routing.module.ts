import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SkeletonComponent} from '@layout/dashboard/skeleton/skeleton.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'dashboard',
    component: SkeletonComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('@modules/admin/admin.module').then((m) => m.AdminModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
