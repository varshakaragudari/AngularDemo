import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  constructor(private xa:ActivatedRoute){}
  ngOnInit()
  {
    console.log("id is "+
      this.xa.snapshot.
    paramMap.get('id'))
  }

}
