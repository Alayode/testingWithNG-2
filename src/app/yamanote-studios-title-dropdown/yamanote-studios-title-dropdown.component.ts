import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

// TODO: import the primeng/primeng ;

// TODO: Remove the input property and use the input decorator


@Component({
  selector: 'app-yamanote-studios-title-dropdown',
  templateUrl: './yamanote-studios-title-dropdown.component.html',
  styleUrls: ['./yamanote-studios-title-dropdown.component.css'],
  inputs: ['formModel','isRequired']
})

export class YamanoteStudiosTitleDropdownComponent implements OnInit {

   formModel: any;
   isRequired: string;
   titles: SelectItem[];

   @Output() ngModelChange:EventEmitter<String> = new EventEmitter<String>();


  constructor() {
    console.log("create a title dropdown instance");

    this.titles = [];
    this.titles.push({label: '' ,value: ''});
    this.titles.push({label: 'Select Title' ,value: 'null'});
    this.titles.push({label: 'Dr' ,value: 'Dr.'});
    this.titles.push({label: 'Miss' ,value: 'Miss'});
    this.titles.push({label: 'Mrs' ,value: 'Mrs'});
    this.titles.push({label: 'Ms' ,value: 'Ms'});
  }

  ngOnInit() {
  }

}

