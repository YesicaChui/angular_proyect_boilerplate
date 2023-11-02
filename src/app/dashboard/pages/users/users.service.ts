import { Injectable } from '@angular/core';
import { User } from './models';
import { data } from './data/data';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = data;

  idCounter = this.users.length+1;

  getUsers$(): Observable<User[]> {
    return of(this.users);
  }

  createUser$(payload: User): Observable<User[]> {
    this.users.push(payload);
    return of([...this.users]);
  }

  editUser$(id: number, payload: User): Observable<User[]> {
    return of(
      this.users.map((c) => (c.id === id ? { ...c, ...payload } : c))
    );
  }

  deleteUser$(id: number): Observable<User[]> {
    this.users = this.users.filter((c) => c.id !== id);
    return of(this.users);
  }

  getUserById$(id: number): Observable<User | undefined> {
    return of(this.users.find((c) => c.id === id));
  }

  createId(){
    const newId= this.idCounter;
    this.idCounter++
    return newId
  }

}

