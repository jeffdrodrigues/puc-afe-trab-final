import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-covid-deaths',
  templateUrl: './covid-deaths.component.html',
  styleUrls: ['./covid-deaths.component.css']
})
export class CovidDeathsComponent implements OnInit {
  covidInfo: any;
  constructor(private apiService: ApiService) {}

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.getCovidInfo();
  }

  // tslint:disable-next-line: typedef
  getCovidInfo(){
    this.apiService.getCovidInfo().subscribe(dados => this.covidInfo = dados);
  }
}
