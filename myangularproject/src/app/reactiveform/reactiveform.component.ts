import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  name='s'
    myloginform=new FormGroup(
      {
        user:new FormControl(''),
        pass:new FormControl('')  
      }
    )
    loginUser()
    {
      console.log(this.myloginform.value)
    }
}
