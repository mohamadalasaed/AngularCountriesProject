import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../Models/api';
import { Country } from '../Models/countries';

const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AllCountries : Country[] = [];
  selectCountries : Country[] = [];
  selectedCountry : Country = new Country();
  isFirstRun : boolean = true;

  constructor(private apiSvc : ApiService, private apiCaller: HttpClient){
    this.getCountries();
  }

  getCountryByName(country:string){
    if(country == "ALL" || country == ""){
      this.getCountries();
    }else{
      this.getSpecificCountry(country);
    }
  }

  getCountries(){
    this.apiCaller
      .get(this.apiSvc.getUrl('all'))
      .subscribe((data) => {
        // console.log(data);
        this.fillArray(data);
      });
  }

  getSpecificCountry(name : string){
    this.apiCaller
      .get(this.apiSvc.getUrl(`name/${name}`))
      .subscribe((data:any) => {
        this.fillArray(data);
      });
  }

  fillArray(data:any){
    this.AllCountries = [];
    data.forEach((country:any) => {
      let c = new Country();
      c.id = uuidv4();
      c.name = country.name.common;
      c.imgSrc = country.flags.png;
      if(this.isFirstRun){this.selectCountries.push(c)};
      this.AllCountries.push(c)
    });
    this.isFirstRun = false;
  }

}