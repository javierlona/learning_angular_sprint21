import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';
import { Todo } from 'src/app/types';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  pageTitle: string = "Sprint 21 Homepage";
  todos: Todo[] = [];

  constructor(
    private informationService: InformationService,
  ) { }

  ngOnInit(): void {
    this.getMyDataFunction();
  }

  private getMyDataFunction() {
    this.informationService.getTodos()
    .pipe(map((responseData: any ) => {
      return responseData.data }))
    .subscribe(responseData => {
      this.todos = responseData
    });

    /*
    * A different way to manipulate the data
    * when fetching complex data
    *
    */
    // this.informationService.getTodos()
    // .subscribe((responseData:any) => {
    //     this.todos = responseData.data
    // });

    /*
    * Use the line below to view the data
    * when not inside an object array
    *
    */
    // this.informationService.getTodos()
    // .subscribe(responseData => {
    //   this.todos = responseData
    // });

    /*
    * Use the line below to view the data
    * in the console
    *
    */
    // this.informationService.getTodos()
    // .subscribe(responseData => console.log(responseData));
  }

}
