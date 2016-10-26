import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {SelectItem} from  'primeng/primeng';


@Component({
  selector: 'app-yamanote-studios-credit-card-type-dropdown',
  templateUrl: './yamanote-studios-credit-card-type-dropdown.component.html',
  styleUrls: ['./yamanote-studios-credit-card-type-dropdown.component.css']
})
export class YamanoteStudiosCreditCardTypeDropdownComponent implements OnInit {

  formModel: any;
  isRequired: string;

  cards: SelectItem[];
  @Output() ngModelChange: EventEmitter<String> = new EventEmitter<String>();

  constructor() {
    // console.log("create an credit-card-DropDown instance");
    this.cards = [];
    this.cards.push({label: 'Select Card', value: null});
    this.cards.push({label: 'JetBlue World MasterCard', value: 'JC'});
    this.cards.push({label: 'American Express', value: 'AX'});
    this.cards.push({label: 'Discover', value: 'DS'});
    this.cards.push({label: 'MasterCard', value: 'CA'});
    this.cards.push({label: 'Visa', value: 'VI'});
    this.cards.push({label: 'Diners Club', value: 'DC'});
    this.cards.push({label: 'Universal Air Travel Program', value: 'TP'});
    this.cards.push({label: 'Japan Credit Bureau', value: 'JB'});
  }

  ngOnInit() {
  }

}
