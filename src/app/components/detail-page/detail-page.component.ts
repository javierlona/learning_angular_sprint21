import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';
import { Todo } from 'src/app/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  todo: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private informationService: InformationService,
  ) { }

  ngOnInit(): void {
    this.getTodo();
  }

  private getTodo() {
    const id = this.route.snapshot.paramMap.get('id');
    this.informationService.getTodoById(id!)
    .subscribe((responseData:any) => {
        this.todo = responseData.data
    });
    /*
    * Use the line below to view the data
    * when not inside an object array
    *
    */
    // .subscribe(responseData => {
    //   console.log(responseData)
    //   this.todo = responseData;
    // })
  }

}
