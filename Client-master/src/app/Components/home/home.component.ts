import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private myService: SessionService) { }

  ngOnInit() {
    // console.log(`############$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%`, this.user);
    // this.myService.isLoggedIn()
    // .then( () => {
    // this.myService.currentUser.subscribe((res) => {
    //   this.user = res;
    //   if (this.user === undefined || this.user === null ) {
    //     this.router.navigate(['/login']);
    //   }
    // });
    // });
  }

}
