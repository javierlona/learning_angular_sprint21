import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-example',
  templateUrl: './parent-example.component.html',
  styleUrls: ['./parent-example.component.css']
})
export class ParentExampleComponent implements OnInit {
  // Variables
  username: string = "John Doe";

  constructor() { }

  ngOnInit(): void {
  }

}
