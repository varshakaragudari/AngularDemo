import { Component } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HotelBlogComponent } from './hotel-blog/hotel-blog.component';
import { TravelBlogComponent } from './travel-blog/travel-blog.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { Login2Component } from './login2/login2.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

export const routes: Routes = [
    {path:'blog',component:BlogComponent ,children:[
        {path:'hotel',component:HotelBlogComponent},
        {path:'travel',component:TravelBlogComponent}
    ]  },
    {path:'footer',component:FooterComponent ,
    canActivate:[authGuard]   },
    {path:'login',component:LoginComponent  },
    {path:'login2',component:Login2Component  },
    {path :'reactive',loadComponent:()=>
     import('./reactiveform/reactiveform.component')
    .then((r)=>r.ReactiveformComponent)}
]