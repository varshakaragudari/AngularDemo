import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import {student } from '../model/student/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-students.component.html',
  styleUrl: './get-students.component.css'
})
export class GetStudentsComponent {
  studentService: any;
get() {
  console.log(this.stud)
  return this.student.getStudentDetails().subscribe(student=>{
    this.stud=student;
  })
}

  stud: student={
    id: 0,
    name: ''
  };

  constructor(private student:StudentService){
   
   // console.log(this.stud)
  }
  ngOnInit(){
    this.student.getStudentDetails().subscribe((student:any)=>
    {
      console.log(student)
      this.stud = student
      console.log(this.stud)

    });
    console.log("stud",this.stud)
  }
}
