import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular ' + VERSION.major;
  public testForm:FormGroup;
  constructor(private formbuilder: FormBuilder){
    
  }

ngOnInit(): void {
  this.createForm();
}

createForm() {

  this.testForm = this.formbuilder.group(
    {
      date : new FormControl('')
    }
  );   
}

onSubmit(){
  console.info(this.testForm.value);
}

}
