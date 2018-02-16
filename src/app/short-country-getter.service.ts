import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ShortCountry } from './short-country';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ShortCountryGetter {

  constructor(private http: HttpClient) {}

  getCountryInfo(): Observable<ShortCountry> {
    // return of(SHORTCOUNTRY);

    const url = 'https://restcountries.eu/rest/v2/all';
    return this.http.get<ShortCountry>(url).pipe(
      catchError(this.handleError<ShortCountry>(`getCountryInfo`))
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
