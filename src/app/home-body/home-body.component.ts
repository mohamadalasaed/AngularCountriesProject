import { Component } from '@angular/core';
import { Country } from '../Models/countries';
import { Input } from '@angular/core';

@Component({
  selector: 'home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent {
  @Input() Countries : Country[] = [];
}
