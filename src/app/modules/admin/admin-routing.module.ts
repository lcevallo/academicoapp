import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from '@modules/admin/create-user/create-user.component';
import {ExampleComponent} from '@modules/admin/example/example.component';


const routes: Routes = [
  {
    path: '',
    component: CreateUserComponent
  },
  {
    path: 'usuario',
    component: CreateUserComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
