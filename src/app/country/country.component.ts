import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiCountryService } from '../service/api.country.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource  } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  displayedColumns: string[] = ['country', 'cases', 'deaths', 'recovered'];
  infoCountries: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiCountryService: ApiCountryService) { }


  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.getCovidCountries();
  }

  // tslint:disable-next-line: typedef
  getCovidCountries(){
    this.apiCountryService.getCovidCountries().subscribe(dados => {
      this.infoCountries = new MatTableDataSource<CovidContries>(dados);
      this.infoCountries.paginator = this.paginator;
      this.infoCountries.sort = this.sort;
    });
  }
}


/* Static data */
export interface CovidContries {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
}
