import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
import { ApiCountryService } from './service/api.country.service';
import { CovidCasesComponent } from './covid-cases/covid-cases.component';
import { CovidDeathsComponent } from './covid-deaths/covid-deaths.component';
import { CovidRecoveredComponent } from './covid-recovered/covid-recovered.component';
import { CountryComponent } from './country/country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidCasesComponent,
    CovidDeathsComponent,
    CovidRecoveredComponent,
    CountryComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [ApiService, ApiCountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
