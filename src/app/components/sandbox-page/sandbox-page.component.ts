import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-sandbox-page',
  templateUrl: './sandbox-page.component.html',
  styleUrls: ['./sandbox-page.component.css']
})
export class SandboxPageComponent implements OnInit {
  makeTextRedItalic: boolean = true;
  defaultInput01: string = "ngModel property binding";
  answerInput02: string = '';
  examplePropBinding: string = "Property Binding";
  modelDrivenForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.modelDrivenForm = new FormGroup({
      input04: new FormControl(''),
      input05: new FormControl(''),
      input06: new FormControl('')
    });
  }

  clickTheButton() {
    alert("You clicked the button");
  }

  onTemplateSubmit(form: NgForm) {
    console.log("Submitted");
    console.log(form);
  }

  onModelSubmit() {
    console.log(this.modelDrivenForm.value);
  }

}
