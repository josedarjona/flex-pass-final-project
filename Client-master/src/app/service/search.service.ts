import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  results: any;
  gymResults: Array<any> = [];
  baseUrl: any = environment.apiUrl;

  constructor(private http: Http) { }

  searchResult(x) {
    console.log('x is : ', x);
    return this.http.post(`${this.baseUrl}/search/gymsearch`, x)
    .map(res => {
      this.results = res;

      // console.log(`get the results bruhuuhuhuhuhu`, this.results._body);
      // console.log(`get the results MAMAMAMAMAMAMAMA`, this.results);
      this.gymResults = JSON.parse(this.results._body);
      // console.log('res in search service:----->', JSON.parse(this.results._body));
      // this.gymResults.push(JSON.parse(this.results._body));
      // console.log(`This is GymResults========>>>>>>!!!!!!!`, this.gymResults);
      res.json();

    })
      .catch(this.handleError);
  }




  handleError(e) {
    return Observable.throw(e.json().message);
  }





}
