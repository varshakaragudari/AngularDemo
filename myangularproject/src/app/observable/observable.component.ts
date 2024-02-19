import { Component } from '@angular/core';
import { Observable, Observer, count, filter, interval, of, reduce, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {
  sequenceSubscriber = new Observable((observer) => {
    // synchronously deliver 1, 2, and 3, then completes             
    setTimeout(() => { observer.next(1), 1000 });
    setTimeout(() => { observer.next(2), 6000 });
    setTimeout(() => { observer.next(3), 10000 });
    //setTimeout(() => { observer.error("Somthing went wrong,Retry!!"),12000 });
    setTimeout(() => { observer.complete(), 16000 });
  })

  test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  case1 = this.test1.pipe(
    filter(x => x % 2 === 0),
    reduce((acc, one) => acc + one, 0)
  )
//----------------------------------------------------------------
   test = interval(2000);
   case2 = this.test.pipe(take(5));
   //- ----------------------------------------------------------------
    all_nums = of(1, 6, 5, 10, 9, 20, 40);
    case3 = this.all_nums.pipe(count(a => a % 2 === 0));
get() {
  this.case1.subscribe((x: any) => console.log("case 1:"+x));
  this.case2.subscribe(x => console.log("case 2"+x));
  this.case3.subscribe(x => console.log("The count is "+x));

} 

  // this.sequenceSubscriber.subscribe((data: any) => {
  //   console.log(data);
  // }, (err: any) => { console.log(err); }, () => { console.log("Data streaming done ") })
}