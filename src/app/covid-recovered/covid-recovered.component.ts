import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-covid-recovered',
  templateUrl: './covid-recovered.component.html',
  styleUrls: ['./covid-recovered.component.css']
})
export class CovidRecoveredComponent implements OnInit {
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
