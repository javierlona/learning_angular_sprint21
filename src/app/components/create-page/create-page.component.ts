import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  constructor(
    private router: Router,
    private informationService: InformationService
  ) { }

  ngOnInit(): void {
  }

  // onSubmit({ title, completed, userId }): void {
  //   this.informationService.createTodo(title, completed, userId)
  //     .subscribe(() => {
  //       this.router.navigateByUrl('/home');
  //     })
  // }

}
