import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-yamanote-studios-input',
  templateUrl: './yamanote-studios-input.component.html',
  styleUrls: ['./yamanote-studios-input.component.css']
})
export class YamanoteStudiosInputComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;


  constructor() {
    console.log("create an input instance")
  }

  ngOnInit() {
  }

}
