import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { catchError, EMPTY, tap } from 'rxjs';
import { HttpService } from './services/http.service';
import { RxJsOperatorsService } from './services/rx-js-operators.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{

  countriesObservable$ = this._httpService.countriesObservable$.pipe(
    catchError( err => {
      // this.errorMessage = err;
      console.warn(err);
      return EMPTY;
    })
  );

  constructor(private _rxjsService: RxJsOperatorsService,
    private _httpService: HttpService){
    
  }

ngOnInit(): void {
  
  this._rxjsService.operators();

}

}
