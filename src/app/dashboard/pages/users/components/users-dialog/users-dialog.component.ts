import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styles: [
  ]
})
export class UsersDialogComponent {
  nameControl = new FormControl();
  lastNameControl = new FormControl();
  emailControl = new FormControl();
  paisControl = new FormControl();
  tipoControl = new FormControl();
  
  userForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    pais: this.paisControl,
    tipo: this.tipoControl,

  });

  constructor(
    private matDialogRef: MatDialogRef<UsersDialogComponent>,
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) private userId?: number
  ) {
    console.log(userId)
    if (userId) {
      this.usersService.getUserById$(userId).subscribe({
        next: (c) => {
          if (c) {
            this.userForm.patchValue(c);
          }
        },
      });
    }
  }

  public get isEditing(): boolean {
    return !!this.userId;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return this.userForm.markAllAsTouched();
    } else {
      // logica para crear un curso
      this.matDialogRef.close(this.userForm.value);
    }
  }





  /*
  userForm: FormGroup
  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<UsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user?: User) {
    this.userForm = this.fb.group({
      name: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ['', [Validators.email, Validators.required, Validators.minLength(3)]],
      pais: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    })

    if (this.user) {
      this.userForm.patchValue(this.user)
    }

  }
*/
/*
  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched()
    } else {
      this.matDialogRef.close(this.userForm.value)
    }
  }
*/
  tipos: string[] = ['Normal', 'Semibeca', 'Becado'];
  paises: string[] = [
    'Perú',
    'Argentina',
    'Bolivia',
    'Colombia',
    'México',
    'Chile',
    'Ecuador',
    'Uruguay',
    'Paraguay',
    'Venezuela',
    'Brasil'
  ];




}
