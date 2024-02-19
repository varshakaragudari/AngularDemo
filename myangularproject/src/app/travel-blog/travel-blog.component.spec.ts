import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelBlogComponent } from './travel-blog.component';

describe('TravelBlogComponent', () => {
  let component: TravelBlogComponent;
  let fixture: ComponentFixture<TravelBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
