import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Department } from 'src/app/Interfaces/department';

@Component({
  selector: 'app-employes',
  templateUrl: './employes-filter.component.html',
  styleUrls: ['./employes-filter.component.scss'],
})

export class EmployesFilterComponent {
  @Input() departments: Department[] = [];

  selectedDepartment: string = "";

  @Output() btnData = new EventEmitter<string>();

  btnClick(data: string) {
    this.selectedDepartment = data;
    this.btnData.emit(data);
  }
}
