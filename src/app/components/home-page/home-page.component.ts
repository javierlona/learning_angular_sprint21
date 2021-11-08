import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';
import { Todo } from 'src/app/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  pageTitle: string = "Sprint 21 Homepage";
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
