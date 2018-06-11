import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from '../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  user: any;
  error: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, private myService: SessionService, private myRouter: Router) {}

  logout() {
    this.myService.logout()
      .subscribe(
        (res) => {
          // this.user = null;
          // console.log('logout', res);
          // console.log(`this is the user `, this.user);
          this.myRouter.navigate(['/login']);
        });
  }

  ngOnInit() {
    // console.log(`############$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%`, this.user);
    this.myService.isLoggedIn()
    .then( () => {
    this.myService.currentUser.subscribe((res) => {
      this.user = res;
      console.log("blahhhhhhh")
    //   if (this.user === undefined || this.user === null ) {
    //     this.myRouter.navigate(['/login']);
    //   }
    });
    })
    .catch(err => {
      console.log('err in main nav comp: ', err)
    });
  }



}
