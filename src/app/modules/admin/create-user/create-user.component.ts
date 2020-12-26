import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@shared/services/dashboard.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(public dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.changeTitle('Crear Usuario')
  }

}
