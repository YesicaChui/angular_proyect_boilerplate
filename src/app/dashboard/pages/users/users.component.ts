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
    id : 1,
    name: 'Karen',
    lastName: 'Chuki',
    email: 'karen@gmail'
  }
  testUser2: User = {
    id : 2,
    name: 'Michina',
    lastName: 'Miauuu',
    email: 'michi@gmail'
  }
 users:User[]=[
  {
    id : 1,
    name: 'Karen',
    lastName: 'Callisaya',
    email: 'karen@gmail'
  },
  {
    id : 2,
    name: 'Michina',
    lastName: 'Miauuu',
    email: 'michi@gmail'
  }
 ]
  constructor(private matDialog: MatDialog) {

  }
  openUsersDialog():void{
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
      next: (valor)=> {
        console.log(valor)
        
        console.log(`Escribiste esto ${valor}`)
        if(valor){
          this.userName = valor
        }
      }
    })
  }

}
