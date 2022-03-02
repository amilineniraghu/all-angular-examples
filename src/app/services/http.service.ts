import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgxLoggerLevel } from 'ngx-logger/lib/types/logger-level.enum';
import { NGXLogger } from 'ngx-logger/lib/logger.service';
@Injectable({
  providedIn: 'root',
})
export class HttpService {

  public url:string = "https://restcountries.com/v3.1/region/asia";
  errorMessage: any;
  public countriesObservable$ = this._httpClient.get<any[]>(this.url)
  .pipe(
    catchError( this.handleError)
  );


  constructor(private _httpClient: HttpClient,
    private logger: NGXLogger) {}

  private handleError(err:any){
    let errorMessage:string;
    if(err instanceof ErrorEvent){
      errorMessage = `An Error occured: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }

    this.logger.error(errorMessage);
    return throwError(()=> new Error(errorMessage));
  }

}
