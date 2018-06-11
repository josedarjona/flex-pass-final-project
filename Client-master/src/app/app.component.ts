import { Component, OnInit } from '@angular/core';
import { SessionService } from './service/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: any;
  constructor(private myService: SessionService, private router: Router) {}

  ngOnInit() {

    // this.myService.isLoggedIn()
    // .then( () => {
    // this.myService.currentUser.subscribe((res) => {
    //   this.user = res;
    //   if (this.user === undefined || this.user === null ) {
    //     this.router.navigate(['/login']);
    //   }
    // });
    // });
    // this.myService.isLoggedIn()
    // .then( () => {
  //     this.user = this.myService.currentUser;
  //     if (this.user === null) {
  //       this.router.navigate(['/login']);
  //     }
  //     // console.log('user in landing: ', this.user);
  //   } )
  //   .catch( err =>  {
  //     console.log('err in landing ======= : ', err);
  //     this.router.navigate(['/login']);
  //   });
  }

}

