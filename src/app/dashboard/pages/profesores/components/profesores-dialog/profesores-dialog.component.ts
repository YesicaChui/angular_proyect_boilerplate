import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProfesoresService } from '../../profesores.service';

@Component({
  selector: 'app-profesores-dialog',
  templateUrl: './profesores-dialog.component.html',
  styleUrls: ['./profesores-dialog.component.scss']
})
export class ProfesoresDialogComponent {
  nameControl = new FormControl();
  lastNameControl = new FormControl();
  emailControl = new FormControl();
  especialidadControl = new FormControl();
  tipoControl = new FormControl();
  
  profesorForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    especialidad: this.especialidadControl,
    tipo: this.tipoControl,

  });

  constructor(
    private matDialogRef: MatDialogRef<ProfesoresDialogComponent>,
    private profesoresService: ProfesoresService,
    @Inject(MAT_DIALOG_DATA) private profesorId?: number
  ) {
    if (profesorId) {
      this.profesoresService.getProfesorById$(profesorId).subscribe({
        next: (c) => {
          if (c) {
            this.profesorForm.patchValue(c);
          }
        },
      });
    }
  }

  public get isEditing(): boolean {
    return !!this.profesorId;
  }

  onSubmit(): void {
    if (this.profesorForm.invalid) {
      return this.profesorForm.markAllAsTouched();
    } else {
      // logica para crear un curso
      this.matDialogRef.close(this.profesorForm.value);
    }
  }


  tipos: string[] = ['Contratado', 'Asociado', 'Principal'];
  Especialidades: string[] = [
    'Desarrollo web',
    'Algoritmia',
    'Backend',
    'Desarrollo movil',
    'DevOP',
    'Base de Datos',
  ];
}
