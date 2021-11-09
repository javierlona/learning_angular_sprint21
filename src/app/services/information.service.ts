import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../types';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(
    private http: HttpClient,
    ) { }

  getTodos(): Observable<any[]> {
    console.log("Here in getinfo");
    console.log(this.http.get<any>('https://jsonplaceholder.typicode.com/todos'));
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
