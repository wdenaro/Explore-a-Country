import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { FullCountry } from './full-country';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FullCountryGetter {

  constructor(private http: HttpClient) {}

  getCountryInfo(alpha: string): Observable<FullCountry> {
    // console.log(alpha);
    // return of(FULLCOUNTRY);

    const url = 'https://restcountries.eu/rest/v2/alpha/'
      + alpha
      + '?fields=alpha3Code;name;capital;subregion;population;area;borders;flag;';

    return this.http.get<FullCountry>(url).pipe(
      // tap(_ => console.log(`fetched country alpha=${alpha}`)),
      catchError(this.handleError<FullCountry>(`getCountryInfo alpha=${alpha}`))
    );

  }

 private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
