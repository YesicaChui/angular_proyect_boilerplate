import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profesor } from '../../models';

@Component({
  selector: 'app-profesores-table',
  templateUrl: './profesores-table.component.html',
  styleUrls: ['./profesores-table.component.scss']
})
export class ProfesoresTableComponent {
  @Input()
  dataSource: Profesor[] = [];

  @Output()
  editProfesor = new EventEmitter();

  @Output()
  deleteProfesor = new EventEmitter();

  displayedColumns = [ 'id','fullName', 'email','especialidad','tipo','actions']
}
