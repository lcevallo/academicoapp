import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient, HttpErrorResponse, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '@data/schema/model/user';
import {CustomHttpResponse} from '@data/interfaces/custom-http-response';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private host = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[] | HttpErrorResponse >  {
    return this.http.get<User[]>(`${this.host}/usuario/list`);
  }

  public addUser(formData: FormData): Observable<User | HttpErrorResponse >  {
    return this.http.post<User>(`${this.host}/usuario/add`, formData);
  }

  public updateUser(formData: FormData): Observable<User | HttpErrorResponse >  {
    return this.http.put<User>(`${this.host}/usuario/update`, formData);
  }

  public resetPassword(email: string): Observable<CustomHttpResponse | HttpErrorResponse >  {
    return this.http.get<CustomHttpResponse>(`${this.host}/usuario/resetPassword/${email}`);
  }

  public updateProfileImage(formData: FormData): Observable<HttpEvent<User> | HttpErrorResponse >  {
    // @ts-ignore
    return this.http.put<User>(`${this.host}/usuario/updateProfileImage`, formData,
                          {
                                   reportProgress: true,
                                   observe: 'events'
                                  }
                                );
  }

  public deleteUser(userId: number): Observable<CustomHttpResponse | HttpErrorResponse >  {
    return this.http.delete<CustomHttpResponse>(`${this.host}/usuario/delete/${userId}`);
  }

  public addUsersToLocalCache(users: User[]): void  {
    localStorage.setItem('users', JSON.stringify(users));
  }

  public getUsersFromLocalCache(): User[]  {
    if (localStorage.getItem('users')) {
     return JSON.parse(localStorage.getItem('users'));
   }
    return null;
  }

  public createUserFormData(
    loggedInUsername: string,
    user: User,
    profileImage: File
  ): FormData {
    const formData = new FormData();
    formData.append('login', loggedInUsername);
    formData.append('personaId', JSON.stringify(user.personaId));
    formData.append('estadoId', JSON.stringify(user.estadoId));
    formData.append('creadopor', JSON.stringify(user.creadopor));
    formData.append('activo', user.activo);
    formData.append('password', user.password);
    formData.append('pregunta1', user.pregunta1);
    formData.append('respuesta1', user.respuesta1);
    formData.append('pregunta2', user.pregunta2);
    formData.append('respuesta2', user.respuesta2);
    formData.append('pregunta3', user.pregunta3);
    formData.append('respuesta3', user.respuesta3);
    formData.append('active', JSON.stringify(user.active));
    formData.append('notLocked', JSON.stringify(user.notLocked));
    formData.append('profileImage', profileImage);
    return formData;

  }

}
