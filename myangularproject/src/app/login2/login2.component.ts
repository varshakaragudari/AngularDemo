import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {
constructor(private l:LoginService){}
  validateUser(u:string,p:string){
      if(u=="admin" && p=="admin"){
          this.l.isValidUser=true;
    
  }
}
}