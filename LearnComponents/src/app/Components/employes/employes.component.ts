import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss']
})
export class EmployesComponent {
  departments = [
    {
      name: "Marketing Research",
      code: "MR"
    },
    {
      name: "Public Relations",
      code: "PR"
    },
    {
      name: "Human Relations",
      code: "HR"
    },
    {
      name: "All",
      code: "ALL"
    }
  ];

  selectedDepartment: string = "";
  @Output() btnData = new EventEmitter<string>();

  btnClick(data: string) {
    this.selectedDepartment = data;
    this.btnData.emit(data);
  }
}
