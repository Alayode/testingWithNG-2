import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {SelectItem} from  'primeng/primeng';

@Component({
  selector: 'app-yamanote-studios-country-dropdown',
  templateUrl: './yamanote-studios-country-dropdown.component.html',
  styleUrls: ['./yamanote-studios-country-dropdown.component.css']
})
export class YamanoteStudiosCountryDropdownComponent implements OnInit {

  formModel: any;
  isRequired: string;

  countries: SelectItem[];
  @Output() ngModelChange: EventEmitter<String> = new EventEmitter<String>();

  constructor() {
    console.log("create a countries dropdown instance");
  }

  ngOnInit() {
  }

}
