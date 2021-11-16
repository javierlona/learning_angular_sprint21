import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/types';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
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
    .subscribe(responseData => {
      console.log(responseData)
      this.todo = responseData;
    })
  }

}
