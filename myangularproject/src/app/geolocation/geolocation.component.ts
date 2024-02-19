import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-geolocation',
  standalone: true,
  imports: [],
  templateUrl: './geolocation.component.html',
  styleUrl: './geolocation.component.css'
})
export class GeolocationComponent {

   locations = new Observable((observer) => {
    let watchId: number;
  
    // The geolocation API (if it exists) provides values to publish
    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position: GeolocationPosition) => observer.next(position),
        (error: GeolocationPositionError) => observer.error(error)
      );
    } else {
      observer.error('Geolocation not available');
    }
  
    // When the consumer unsubscribes, stop listening to geolocation changes.
    return {
      unsubscribe() {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  });

  get()
  {
    const locationsSubscription = this.locations.subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
    
    // Stop listening for location after 10 seconds
    setTimeout(() => {
      locationsSubscription.unsubscribe();
    }, 10000);
  }
}
