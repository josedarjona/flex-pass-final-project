import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { SessionService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/rx';
import { ActivatedRoute, Router } from '@angular/router';
// import { SearchService } from '../service/search.service';
import { forEach } from '@angular/router/src/utils/collection';
import { containsTree } from '@angular/router/src/url_tree';
import { SearchService } from '../../service/search.service';
import { GymService } from '../../service/gym.service';
import {Chart} from 'chart.js';
import { Color } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', './search.component.scss']
})
export class SearchComponent implements OnInit {
  resultSearch: any = {};
  searchTerm: any;
  today: Date = new Date();

  error: string;
  gymReturn: any = this.mySearch.gymResults;
  // busyTimes: any = this.mySearch.gymResults
  // week: any = this.mySearch.gymResults[0].week[0].forEach(thing => thing.day);
  // week = this.mySearch.gymResults[0].week[0];
  thisIsWeek: any;
  show: boolean;
  theDay: any;
  gymSelected: any;
  user: any;
  isReady: boolean;
  showRes: boolean;

  constructor(public mySearch: SearchService,
    private myGymService: GymService,
    private myAuthService: SessionService,
    private myRouter: Router
  ) {
    this.show = false;
    this.isReady = false;
    this.showRes = true;
  }


  isDate(arrDay) {


    while (Date().includes(arrDay)) {

      // console.log('this is the current Date', Date());
      return this.show = true;

    }




  }

  // checkResArr() {
  //   while (this.mySearch.gymResults === []) {
  //     this.showRes = false;
  //   }
  // }




  addGym(gymID, user) {
    // console.log(`WHAT IS GYM ID MANNNNNN`, gymID);
    // console.log(`WHAT IS USER ID MANNNNNN`, user);
    this.myGymService.newGym(gymID, user)
    .subscribe(
      (gymAdded) => {
      console.log(gymAdded);
    },
    (err) => { this.error = err;
      console.log('Unsucessfully Added Gym');
    });
  }

  gymSearch() {
    this.isReady = false;
    // console.log(`this is Search Term====>>>>>>`, this.resultSearch.searchTerm);
    this.mySearch.searchResult(this.resultSearch)
      .subscribe(

        (res) => {
          this.resultSearch.searchTerm = res;
          // this.showRes = true;
          this.isReady = true;
        },
        (err) => this.error = err
      );

    }

      // getArray() {
      //   // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:max-line-length
      //   // console.log(`this gets array`, this.mySearch.gymResults[0].week[0].forEach(thing => { console.log('this is the thing--->', thing.day); }));

      //   const week = this.mySearch.gymResults[0].week[0];
      //   week.forEach(element => {
      //     if (Date().includes(element.day)) {
      //       console.log('its todays day');
      //       console.log('todays day stuff', element.hours);

      //       return this.thisIsWeek = element.hours;
      //     }
      //   });

      // }


  ngOnInit() {
    // console.log(`WHAT THE HELLL MANNN`, this.user)
    // this.myAuthService.isLoggedIn();
    // console.log("what is gym return:  ", this.gymReturn);
    // this.myAuthService.currentUser.subscribe((res) => {
    //   this.user = res;
    //   if (this.user === undefined || this.user === null ) {

    //     // this.myRouter.navigate(['/login']);
    //   }
    // });
    //     this.myRouter.navigate(['/login']);
    //   }
    // });
    this.isReady =  false;

    this.gymSearch();


  }

}
