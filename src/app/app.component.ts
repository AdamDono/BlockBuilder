import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 registerForm = this.fb.group({

  username: '',
  password: '',
  email: '',

 });
register: FormGroup<any> | undefined;

  title: any;
  constructor (private fb: FormBuilder) {}

  onSubmit(): void {
console.log('Submitted form', this.registerForm.value); 

  }
    
}
