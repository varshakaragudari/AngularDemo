import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService  {

  constructor(private http:HttpClient) { }

  getStudentDetails():Observable<any>
  {
    return this.http.get('http://localhost:3000/students')
  }
}
