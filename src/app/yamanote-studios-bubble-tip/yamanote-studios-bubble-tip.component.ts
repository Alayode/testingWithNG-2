import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yamanote-studios-bubble-tip',
  templateUrl: './yamanote-studios-bubble-tip.component.html',
  styleUrls: ['./yamanote-studios-bubble-tip.component.css'],
  inputs:['helpPopOverMsg' , 'toolTipLocation']
})
export class YamanoteStudiosBubbleTipComponent implements OnInit {


  helpPopOverMsg: string;
  toolTipLocation: string;

  constructor() {
    console.log("BubbleTip Component initialized!")
  }

  ngOnInit() {
  }

}
