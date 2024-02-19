import { authGuard } from './../auth.guard';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  @Input() item = '';
  @Output() updateChild=new EventEmitter<string>();
 }
