import { Component } from '@angular/core';


import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './models';
import { data } from './data/data';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users$: Observable<User[]>;

  constructor(
    private usersService: UsersService,
    private matDialog: MatDialog
  ) {
    this.users$ = this.usersService.getUsers$();
  }

  addUser(): void {
    this.matDialog
      .open(UsersDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.users$ = this.usersService.createUser$({
              id: this.usersService.createId(),
              name: result.name,
              lastName: result.lastName,
              email: result.email,
              pais: result.pais,
              tipo: result.tipo,
            });
          }
        },
      });
  }

  onDeleteUser(userId: number): void {
    this.users$ = this.usersService.deleteUser$(userId);
  }

  onEditUser(userId: number): void {
    this.matDialog
      .open(UsersDialogComponent, {
        data: userId,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.users$ = this.usersService.editUser$(userId, result);
          }
        },
      });
  }

  /*
  users: User[] = data
  idCounter = this.users.length+1;
  constructor(private matDialog: MatDialog) {

  }
  openUsersDialog(): void {
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
      next: (valor) => {
        if (valor) {          
          this.users = [
            ...this.users,
            {...valor, id:this.idCounter}
          ]
          this.idCounter++

        }
      }
    })
  }

  onDelete(userId:number):void{
    if(confirm('Esta seguro de eliminar este registro')){

      this.users=this.users.filter(user=>user.id!==userId)
    }
  }

  onEditUser(user:User):void{
    this.matDialog.open(UsersDialogComponent,{data:user}).afterClosed().subscribe({
      next:(valor)=>{
        if(valor){
          const arrayNuevo=[...this.users]
          const indiceToEdit = arrayNuevo.findIndex((elemento)=>elemento.id===user.id)
          arrayNuevo[indiceToEdit] = {...arrayNuevo[indiceToEdit],...valor}
          this.users=[...arrayNuevo]
        }
      }
    })
  }

*/
}
