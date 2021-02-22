import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs/operators';

@Component({
  selector: 'get-position',
  templateUrl: './get-position.component.html',
  styleUrls: ['./get-position.component.scss']
})
export class GetPositionComponent implements OnInit {
  
  message = "";

  constructor(private readonly geolocation$: GeolocationService) { }

  ngOnInit(): void {
  }

  getLocation() {
    this.geolocation$.pipe(take(1)).subscribe(position => this.doSomethingWithPosition(position));
  }
  
  doSomethingWithPosition(position: any){
    this.message = "Lat: " + position.coords.latitude + " Lon: " + position.coords.longitude;
  }
}
