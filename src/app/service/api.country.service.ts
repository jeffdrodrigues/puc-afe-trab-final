import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiCountryService {

  apiUrl = 'https://disease.sh/v3/covid-19/countries?yesterday=false&sort=cases&allowNull=false';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getCovidCountries(){
    return this.http.get<any>(this.apiUrl);
  }
}
