import { Component, Output, Input, EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Department } from 'src/app/department';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss'],
  providers: [AppComponent]
})


export class EmployesComponent {
  @Input() departments: Department[] = [];

  selectedDepartment: string = "";

  @Output() btnData = new EventEmitter<string>();

  btnClick(data: string) {
    this.selectedDepartment = data;
    this.btnData.emit(data);
  }
}
