import { Injectable } from '@angular/core';
import { Profesor } from './models';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  profesores: Profesor[] = [
    {
      id: 1,
      name: 'John',
      lastName:'Taboada',
      email: 'john@gmail.com',
      Especialidad: 'Desarrollo web',
      tipo:'Contratado',
    },
    {
      id: 2,
      name: 'Manuel',
      lastName:'Barraza',
      email: 'manuel@gmail.com',
      Especialidad: 'Algoritmia',
      tipo:'Nombrado',
    },

  ];

  getProfesores$(): Observable<Profesor[]> {
    return of(this.profesores);
  }

  createProfesor$(payload: Profesor): Observable<Profesor[]> {
    this.profesores.push(payload);
    return of([...this.profesores]);
  }

  editProfesor$(id: number, payload: Profesor): Observable<Profesor[]> {
    return of(
      this.profesores.map((c) => (c.id === id ? { ...c, ...payload } : c))
    );
  }

  deleteProfesor$(id: number): Observable<Profesor[]> {
    this.profesores = this.profesores.filter((c) => c.id !== id);
    return of(this.profesores);
  }

  getProfesorById$(id: number): Observable<Profesor | undefined> {
    return of(this.profesores.find((c) => c.id === id));
  }
}
