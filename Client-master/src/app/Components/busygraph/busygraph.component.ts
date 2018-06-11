import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SessionService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
import { AgmCoreModule } from '@agm/core';
import { SearchService } from '../../service/search.service';
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { containsTree } from '@angular/router/src/url_tree';
import { SearchComponent } from '../search/search.component';
import {Chart} from 'chart.js';
import { Color } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts/ng2-charts';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// import { map } from '@angular/router/src/utils/collection';
// import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-busygraph',
  templateUrl: './busygraph.component.html',
  styleUrls: ['./busygraph.component.css'],
  providers: [SearchComponent],
})
export class BusygraphComponent implements OnInit {
  @Input() graphSearchResultsHour: any;


  // @Input() graphSearchResultsPerc: any;
  // @Input() graphDashResults: any;

  // wow = this.graphSearchResultsHour;
  resultsFromBefore = this.graphSearchResultsHour;
  hour: any = [];
  perc: any = [];
  // color: any =[];



  // public dashChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public dashChartData: number[] = [350, 450, 100];
  // public dashChartType: any = 'Busy Times';

  public searchChartLabels: string[] = this.hour;
  public searchChartData: any[] = [{data: this.perc,
      label: 'Traffic %'}];
  public searchChartType: any = 'bar';
    // tslint:disable-next-line:max-line-length
    public searchChartColor: any[] =  [];
  public searchChartLegend = false;
  public searchChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: { xAxes: [ { gridLines: {display: false}}],
    yAxes: [ { gridLines: {display: false}}],
}
  }
;
  // public searchChartLabels: string[] = ['ti'];
  // public searchChartData: number[] = [10, 9, 8, 7, 6];
  // public searchChartType: any = 'doughnut';

  // tslint:disable-next-line:max-line-length
  constructor(public mySearch: SearchService, public searchComp: SearchComponent, private myService: SessionService) {
    // setTimeout(function() {
    // const hour = this.graphSearchResultsHour.map(id => {
    //   console.log('CONSOLE LOGGIN THE PERC', id.hour);

    //   hour.push(id.hour);

    // });
    // }, 10000);
    // const perc = this.graphSearchResultsHour.map((id) => {
    //   console.log('CONSOLE LOGGIN THE PERC', id.perc);
    //   // perc.push(id.perc);
    // });


  }



  // , private dashComp: DashboardComponent

  ngOnInit() {
    // console.log(`hour console log`, this.graphSearchResultsHour[0]);
    const hour = this.graphSearchResultsHour[0].map(id => {
      // console.log('CONSOLE LOGGIN THE HOUR before', id.hour);

      this.hour.push(id.hour);
      // console.log(`this is the hour for the thing afterr!`, this.hour);
    });
    const perc = this.graphSearchResultsHour[0].map(id => {
      // console.log('CONSOLE LOGGIN THE PERC b4', id.percentage);

      this.perc.push(id.percentage);
      // console.log(`this is the perc for the thing after!`, this.perc);
    });
    // const that = this;
    // this.hour.forEach(colorMaker => {
    //   this.color.push('#' + parseInt(Math.random() * 0xffffff).toString(16));
    //   console.log(`the color array!!!!!`, this.color);
    // });

  }



  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }




}
