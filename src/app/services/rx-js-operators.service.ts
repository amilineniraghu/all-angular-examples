import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn:"root"
})
export class RxJsOperatorsService {

  constructor() { }

  public operators(){

    /** Of operator */
    of(1,2,3).subscribe(console.log);

    this.drawLine();

    /** Map operator */
    of(1,2,3)
    .pipe(
      map(v => {
        let c  = v+2;
        return c;
      })
    ).subscribe(console.log);

    this.drawLine();
    
  }

  drawLine(){
    console.log("---------------------------------------------");
  }
}

