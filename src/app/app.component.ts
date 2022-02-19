import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RxJsOperatorsService } from './services/rx-js-operators.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{


  constructor(private _rxjsService: RxJsOperatorsService){
    
  }

ngOnInit(): void {
  
  this._rxjsService.operators();

}

}
