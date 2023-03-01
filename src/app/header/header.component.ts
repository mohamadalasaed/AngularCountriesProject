import { Component, EventEmitter, Output } from '@angular/core';
import { Country } from '../Models/countries';
import { Input } from '@angular/core'

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() Countries : Country[] = [];
  @Output() Country = new EventEmitter<string>();
  countryName = '';

  HandelSelect(){
    this.Country.emit(this.countryName);
  }
}
