import { User } from '@data/schema/model/user';
import { AuthenticationService } from '@data/services/api/auth/authentication.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HeaderType } from '@data/enum/header-type.enum';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public signIn = 'container_lc';
  public showLoading: boolean;
  private subscriptions: Subscription[] = [];

  constructor(private router: Router,
    private authenticationService:AuthenticationService) {


     }


  ngOnInit(): void {

    if(this.authenticationService.isUserLoggedIn()){

      this.router.navigateByUrl('/dashboard/admin');
    }
    else{
      this.colocarClase();
      this.router.navigateByUrl('/auth/login');

    }

  }

  public onLogin(user: User): void {
    this.showLoading = true;
    console.log(user);
    this.subscriptions.push(
        this.authenticationService.login(user).subscribe(
          (response: HttpResponse<User>) =>{
                                    const token = response.headers.get(HeaderType.JWT_TOKEN);
                                    this.authenticationService.saveToken(token);
                                    this.authenticationService.addUserToLocalCache(response.body);
                                    this.router.navigateByUrl('/dashboard/admin');
                                    this.showLoading= false;

                                },
          (errorResponse: HttpErrorResponse) => {
            console.log(errorResponse);
            //TODO: Tengo que colocar una notificacion con swagger2

            this.showLoading = false;
          }
        )
    );

  }


  ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  sendErrorNotification(message: string): void {

  }


  colocarClase(): void {
    setTimeout(
      () => {
        this.signIn = 'container_lc sign-in';
      }, 200
    )
  }
}
