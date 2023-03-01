import { Component, EventEmitter, Output } from '@angular/core';
import { Country } from '../Models/countries';
import { Input } from '@angular/core'
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() Countries : Country[] = [];
  @Output() Country = new EventEmitter<string>();
  countryName : string = '';
  countryNameSearch : string = '';
  public keyUp = new Subject<KeyboardEvent>();
  private subscription : Subscription = new Subscription();

  constructor(){
    this.subscription = this.keyUp.pipe(debounceTime(700), distinctUntilChanged()).subscribe(()=>{
      this.Country.emit(this.countryNameSearch);
    });
  }

  HandelSelect(){
    this.Country.emit(this.countryName);
  }
}
