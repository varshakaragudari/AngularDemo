import { LoginService } from './login.service';
import { inject } from '@angular/core';
import { EmployeeService } from './employee.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const es=inject(LoginService);
  const rt=inject(Router)
  if(es.isValidUser)
      return true;
    else
      rt.navigate(['/login2'])
    return false;
};
