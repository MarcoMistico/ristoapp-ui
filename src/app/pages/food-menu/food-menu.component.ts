import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/_services/auth.service';
import { TestService } from 'app/_services/test.service';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private testService: TestService) { }

  ngOnInit(): void {
    this.authService.getAnonymousToken().subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.guestTest();
      },
      err => {
        console.log(err);
      }
    );
  }

  guestTest() {
    this.testService.getGuestTest().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
