import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'get-position',
  templateUrl: './get-position.component.html',
  styleUrls: ['./get-position.component.scss']
})
export class GetPositionComponent implements OnInit {
  
  message = "";
  postId;

  constructor(private readonly geolocation$: GeolocationService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  getLocation() {
    this.geolocation$.pipe(take(1)).subscribe(position => this.doSomethingWithPosition(position));

  }
  
  doSomethingWithPosition(position: any){
    this.message = "Lat: " + position.coords.latitude + " Lon: " + position.coords.longitude;
    this.http.post<any>('https://nominatim.openstreetmap.org/reverse?format=json&lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&zoom=18&addressdetails=1', { title: 'Angular POST Request Example' }).subscribe(data => {
      console.log(data);
      this.message += "--------" + data.display_name;
  })
  }
}
