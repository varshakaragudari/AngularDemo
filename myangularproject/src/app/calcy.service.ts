import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcyService {

  constructor() { }
  add(n1: number, n2: number) {
    let result = n1 + n2;
    return result;
  }

  subtract(n1: number, n2: number) {
    let result = n1 - n2;
    return result;
  }
}
