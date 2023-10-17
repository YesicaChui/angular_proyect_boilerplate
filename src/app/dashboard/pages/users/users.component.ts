import { Component } from '@angular/core';


import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './models';
import { data } from './data/data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
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
    this.users=this.users.filter(user=>user.id!==userId)
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


}
