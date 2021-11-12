import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox-page',
  templateUrl: './sandbox-page.component.html',
  styleUrls: ['./sandbox-page.component.css']
})
export class SandboxPageComponent implements OnInit {
  examplePropBinding: string = "Property Binding";

  constructor() { }
  makeTextRedItalic: boolean = true;

  ngOnInit(): void {
  }

  clickTheButton() {
    alert("You clicked the button");
  }

}
