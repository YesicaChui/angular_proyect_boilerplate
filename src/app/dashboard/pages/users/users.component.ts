import { Component } from '@angular/core';


import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private matDialog: MatDialog) {

  }
  openUsersDialog():void{
    this.matDialog.open(UsersDialogComponent)
  }

}
