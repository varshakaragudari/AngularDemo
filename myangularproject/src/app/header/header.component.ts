import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FooterComponent,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  fn:string = ' '
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),  
    new country('3', 'England')
  ];
 constructor(){

 }
  onSubmit(contactForm: any) {
    console.log(contactForm.value);

  }
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
 