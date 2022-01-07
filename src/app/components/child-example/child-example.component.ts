import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-example',
  templateUrl: './child-example.component.html',
  styleUrls: ['./child-example.component.css']
})
export class ChildExampleComponent implements OnInit {
  @Input() uname!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
