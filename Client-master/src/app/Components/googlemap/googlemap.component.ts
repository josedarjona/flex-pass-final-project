import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SessionService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
import { AgmCoreModule } from '@agm/core';
import { SearchService } from '../../service/search.service';
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { containsTree } from '@angular/router/src/url_tree';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css'],
  // template: `<app-search #app-search</app-search>`
  providers: [SearchComponent],
})
export class GooglemapComponent implements OnInit {
  // @ViewChild(SearchComponent) searchComponent: SearchComponent;
  @Input() searchResults: any;
  zoom = 12;

  latitude = 25.761681;
  longitude = -80.191788;

  resultsFromQuery: any = {};

  markerLocation: string;
markerLat: string;
markerLng: string;
markerDraggable: string;

  marker: Array<any> = [];

  noResults: any;
  error: any;

  constructor(public mySearch: SearchService, public searchComp: SearchComponent, private myService: SessionService) { }

  ngOnInit() {
    // this.myService.isLoggedIn();
  }




      mapTest() {
        console.log(`is anyting happening???` );
        this.mySearch.searchResult(this.resultsFromQuery)
          .subscribe(

            (res) => {
              this.resultsFromQuery = res;
              // console.log('results from query on map comp????????', this.resultsFromQuery);
            },
            (err) => this.error = err
          );

 }


                        getTheResults() {
                          this.marker = [];
                          let newMarker = {
                            location: '',
                            lat: '',
                            lng: '',
                            draggable: false,
                          };
                          //  this.searchResults.forEach(oneThing => {
                          //  console.log( oneThing.name);
                          // });
                        // console.log('this is the search results------>', this.searchResults);
                          const that = this;
                          this.searchResults.forEach(oneResult => {
                        // console.log(oneResult);
                            newMarker = {
                              location: oneResult.name,
                              lat: oneResult.lat,
                              lng: oneResult.lng,
                              draggable: false,
                          };
                          // console.log('this is the new Marker!!!!!!', newMarker);
                          that.marker.push((Object.assign({}, newMarker)));
                          });
                          // console.log('this is just the marker', this.marker);

                        }


}
   // tslint:disable-next-line:class-name
   interface marker {
     location?: string;
     lat: number;
     lng: number;
     draggable: boolean;
   }

// tslint:disable-next-line:class-name


// mapDisplay() {

//   this.searchComponent.gymSearch();
//   console.log('map display is working?????/')
//   this.mySearch.searchResult(this.mySearch.searchResult)
//   .subscribe(resultsFromSearch => {
//     console.log('anything happens here?', resultsFromSearch);
//       this.resultsFromQuery = resultsFromSearch;
//       const that = this;
//       resultsFromSearch.forEach(function(markedLocation){

//         const newMarker = {
//           location: markedLocation.location,
//           lat: markedLocation.latitude,
//           lng: markedLocation.longitude,
//           draggable: false
//       };
//       that.markers.push(newMarker);
//       });
//     },
//     () => {
//       this.noResults = 'Sorry, no lost dogs listed.';
//     }
//   );



    // }

