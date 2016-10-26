import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { SelectItem } from  'primeng/primeng';


@Component({
  selector: 'app-yamanote-studios-credit-card-type-dropdown',
  templateUrl: './yamanote-studios-credit-card-type-dropdown.component.html',
  styleUrls: ['./yamanote-studios-credit-card-type-dropdown.component.css']
})
export class YamanoteStudiosCreditCardTypeDropdownComponent implements OnInit {

    formModel: any;
    isRequired: string;

    cards:SelectItem[];
    @Output() ngModelChange:EventEmitter<String> = new EventEmitter<String>();

  constructor() {
    console.log("create an credit-card-DropDown instance");
  }

  ngOnInit() {
  }

}
