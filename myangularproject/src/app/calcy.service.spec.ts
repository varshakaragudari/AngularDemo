import { TestBed } from '@angular/core/testing';

import { CalcyService } from './calcy.service';

xdescribe('CalcyService', () => {
  let service: CalcyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add two numbers', () => {
    expect(service.add(2, 2)).toBe(4);
  });
  it('should sub two numbers'),()=>{
    expect(service.subtract(2, 2)).toBe(0);
  }
});
