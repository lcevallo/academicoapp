import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DashboardService } from '@shared/services/dashboard.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {


  constructor(public dashboardService: DashboardService) { }


  ngOnInit(): void {
  }

}
