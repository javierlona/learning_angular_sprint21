import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8',
  })
};

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

  editTodo(id: string, title: string, completed: boolean, userId: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,
    { id, title, completed, userId },
    httpOptions,
    );
  }

  createTodo(title: string, completed: boolean, userId: number): Observable<Todo> {
    return this.http.post<Todo>(`https://jsonplaceholder.typicode.com/todos`,
    { title, completed, userId },
    httpOptions,
    );
  }
}
