import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  public titleSubject = new BehaviorSubject<string>('Detalle de Usuario');

  public titleAction$ = this.titleSubject.asObservable();

  public changeTitle(title: string): void{
    this.titleSubject.next(title);
  }

  constructor() { }
}
