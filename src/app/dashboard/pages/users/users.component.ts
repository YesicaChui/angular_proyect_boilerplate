import { Component } from '@angular/core';


import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName = ''
  testUser: User = {
    name: 'Karen',
    lastName: 'Chuki',
    email: 'karen@gmail'
  }
  testUser2: User = {
    name: 'Michina',
    lastName: 'Miauuu',
    email: 'michi@gmail'
  }

  constructor(private matDialog: MatDialog) {

  }
  openUsersDialog():void{
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
      next: (valor)=> {
        console.log(`Escribiste esto ${valor}`)
        if(valor){
          this.userName = valor
        }

      }
    })
  }

}
