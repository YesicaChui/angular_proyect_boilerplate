import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';

import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // constructor(){}
  // login():Observable<User>{
  //   const user:User={
  //     id:10,
  //     email:"juan@gmail.com",
  //     lastName:"Perez",
  //     name:"juan",
  //     token:"dsafdds",
  //     pais:"Perú",
  //     password:"123456",
  //     role:"Admin",
  //     tipo:"Becado",      
  //   }
  //   return of<User>(user)
  // }
 
  private _authUser$ = new BehaviorSubject<User | null>(null);

  public authUser$ = this._authUser$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(payload: LoginPayload): void {
    // const headers = new HttpHeaders({
    //   token: localStorage.getItem('token') || 'NO HAY TOKEN',
    // });
    this.httpClient
      .get<User[]>(
        `${environment.baseUrl}/users?email=${payload.email}&password=${payload.password}`
      )
      .subscribe({
        next: (response) => {
          if (!response.length) {
            alert('Usuario o contrasena invalidos');
          } else {
            console.log("navegando")
            const authUser = response[0];
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token);
            this.router.navigate(['/dashboard']);
          }
        },
        error: (err) => {
          alert('Error de conexion');
        },
      });
  }

  verifyToken(): Observable<boolean> {
    return this.httpClient
      .get<User[]>(
        `${environment.baseUrl}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((users) => {
          if (!users.length) {
            return false;
          } else {
            const authUser = users[0];
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token);
            return true;
          }
        })
      );
  }

  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

}
