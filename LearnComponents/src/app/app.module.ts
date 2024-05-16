import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployesFilterComponent } from './Components/employes-filter/employes-filter.component';
import { ReverseWordsPipe } from './Pipes/reverse-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployesFilterComponent,
    ReverseWordsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
