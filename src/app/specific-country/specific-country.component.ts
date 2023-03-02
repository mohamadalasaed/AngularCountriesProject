import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Models/api';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../Models/countries';

@Component({
  selector: 'app-specific-country',
  templateUrl: './specific-country.component.html',
  styleUrls: ['./specific-country.component.css']
})
export class SpecificCountryComponent {
  Country : Country = new Country();

  constructor(private ac : ActivatedRoute, private apiSvc : ApiService, private apiCaller: HttpClient){
    const countryName = this.ac.snapshot.paramMap.get('name');
    this.apiCaller
      .get(this.apiSvc.getUrl(`name/${countryName}`))
      .subscribe((data:any) => {
        let country = data[0];
        this.Country.name = country.name.common;
        this.Country.nameARB = country.translations.ara.common;
        this.Country.imgSrc = country.flags.png;
        this.Country.capital = country.capital[0];
        this.Country.region = country.region;
        this.Country.area = country.area;
        this.Country.lat = country.latlng[0];
        this.Country.long = country.latlng[1];
        this.Country.loc = country.maps.googleMaps;
        this.Country.population = country.population;
        this.Country.startOfWeek = country.startOfWeek;
      });
  }

}
