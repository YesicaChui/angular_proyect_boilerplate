import { Component } from '@angular/core';
import { Profesor } from './models';
import { ProfesoresService } from './profesores.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProfesoresDialogComponent } from './components/profesores-dialog/profesores-dialog.component';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent {
  profesores$: Observable<Profesor[]>;

  constructor(
    private profesoresService: ProfesoresService,
    private matDialog: MatDialog
  ) {
    this.profesores$ = this.profesoresService.getProfesores$();
  }

  addProfesor(): void {
    this.matDialog
      .open(ProfesoresDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.profesores$ = this.profesoresService.createProfesor$({
              id: new Date().getTime(),
              name: result.name,
              lastName: result.lastName,
              email: result.email,
              Especialidad: result.especialidad,
              tipo: result.tipo,
            });
          }
        },
      });
  }

  onDeleteProfesor(profesorId: number): void {
    this.profesores$ = this.profesoresService.deleteProfesor$(profesorId);
  }

  onEditProfesor(profesorId: number): void {
    this.matDialog
      .open(ProfesoresDialogComponent, {
        data: profesorId,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.profesores$ = this.profesoresService.editProfesor$(profesorId, result);
          }
        },
      });
  }
}
