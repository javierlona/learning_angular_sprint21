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

  getTodos(): Observable<Todo[]> {
    console.log("Here in getinfo");
    console.log(this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos'));
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoById(id: string): Observable<Todo> {
    console.log(id);
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  // editTodos(id: )
}
