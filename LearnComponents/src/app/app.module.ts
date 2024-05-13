import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployesFilterComponent } from './Components/employes-filter/employes-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
