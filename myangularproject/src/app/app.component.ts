import { GeolocationComponent } from './geolocation/geolocation.component';
import { EmployeeService } from './employee.service';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from "./custom-pipe.pipe";
import { TempconvertorPipe } from './tempconvertor.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { GetStudentsComponent } from './get-students/get-students.component';
import { ObservableComponent } from './observable/observable.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [GeolocationComponent,CommonModule, RouterOutlet,RouterLink,ReactiveformComponent,GetStudentsComponent,
      HeaderComponent, FooterComponent, FormsModule,TempconvertorPipe, ObservableComponent,
      CurrencyPipe, CustomPipePipe,HttpClientModule]
})
export class AppComponent {

  fectedData:any

  constructor(private http:HttpClient){  }
  
call() {
  
  this.http.get('http://localhost:3000/students').subscribe((data:any)=>
  {
    this.fectedData=data
    console.log(data)
  })

}
post() {
  let stud={
    "id":4,
    "name":"Varsha",
    "grade":11,
    "marks":{
        "maths":80,
        "physics":50,
        "chemistry":35
}}
  this.http.post('http://localhost:3000/students',stud).subscribe((d)=>console.log(d))
}
  myTemp=30;
  today: number = Date.now();
  title :string = 'First Angular Project';
  myName:string="varsha";
  mycolor="red";
  status=true;
  currentItem = 'Television';
  data=''
  updateData(item:string)
  {
    this.data=item;
  }
  Person=[
    {id:1,name:"seeta",age:21},
    {id:2,name:"seeta",age:21},
    {id:3,name:"seeta",age:21},
  ]
  getDetails(str:string)
  {
      this.myName=str;

      return this.myName;
  }
}
