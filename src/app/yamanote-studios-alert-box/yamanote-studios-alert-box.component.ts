import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-yamanote-studios-alert-box',
  templateUrl: './yamanote-studios-alert-box.component.html',
  styleUrls: ['./yamanote-studios-alert-box.component.css'],
  inputs:['dangerMsgs','successMsgs','warningMsgs','infoMsgs']

})
export class YamanoteStudiosAlertBoxComponent implements OnInit {


  //Goal of this component is to provide alerts as well as anchors/links based on alerts.
  //For mobile web validation errors will output anchor link to required field.
  //Need to create stand messages as part of config.

  dangerMsgs: any = [];
  successMsgs: any = [];
  warningMsgs: any = [];
  infoMsgs: any = [];


  constructor() {
    console.log("create alert box instance")
  }

  ngOnInit() {
  }

}

