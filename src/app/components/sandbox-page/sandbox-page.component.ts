import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sandbox-page',
  templateUrl: './sandbox-page.component.html',
  styleUrls: ['./sandbox-page.component.css']
})
export class SandboxPageComponent implements OnInit {
  examplePropBinding: string = "Property Binding";

  constructor() { }
  makeTextRedItalic: boolean = true;
  defaultInput01: string = "ngModel property binding";

  ngOnInit(): void {
  }

  clickTheButton() {
    alert("You clicked the button");
  }

  onTemplateSubmit(form: NgForm) {
    console.log("Submitted");
    console.log(form);
  }

}
