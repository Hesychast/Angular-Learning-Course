import { Component } from '@angular/core';
import { Employe } from './Interfaces/employe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employes Filter';

  employes: Employe[] = [
    {id: 1, name: "John", surname: "Doe", department: "Market Research", departmentCode: "MR"},
    {id: 2, name: "Jane", surname: "Doe", department: "Human Relations", departmentCode: "HR"},
    {id: 3, name: "Jacke", surname: "Doe", department: "Public Relations", departmentCode: "PR"},
    {id: 4, name: "Jassy", surname: "Doe", department: "Public Relations", departmentCode: "PR"},
    {id: 5, name: "Stassy", surname: "Doe", department: "Market Research", departmentCode: "MR"}
  ];
  filteredEmployes: Employe[] = [];
  
  ngOnInit() {
    this.filteredEmployes = this.getEmployes("ALL");
  }
  
  btnData(data:string) {
    this.filteredEmployes = this.getEmployes(data);
  }

  getEmployes(departmentCode: string | undefined) {
    if (!departmentCode || departmentCode.toUpperCase() === "ALL") {
      return [...this.employes];
    }
    
    return this.employes.filter(e => e.departmentCode === departmentCode.toUpperCase());
  }
}
