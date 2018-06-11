import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/rx';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  user: any;
  error: string;

  constructor(private myService: SessionService, private myRouter: Router) { }

  ngOnInit() {
    // this.myService.isLoggedIn();

    // // this.myService.currentUser.subscribe((res) => {
    // //   this.user = res;
    // //   console.log(`DASHBOARD USER`, this.user);
    //   if (this.user === undefined || this.user === null ) {
    //     this.myRouter.navigate(['/login']);
    // //   }
    // // });
      // }


  }

  login() {
    const loginInfo = {
      username: this.username,
      password: this.password
    };

    this.myService.login(loginInfo)
      .subscribe(
        () => {
          this.user = this.myService.currentUser;
            this.myRouter.navigate(['/dashboard']);
        },
        (err) => this.error = err
      );
  }

}
