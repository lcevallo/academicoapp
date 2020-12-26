import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { ExampleComponent } from './example/example.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [UsersComponent, ExampleComponent, CreateUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
