import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.css']
})
export class UserValidationComponent {
  userLoggedIn:boolean = true
  username:string=""
  age:number = 0;
  address:string=""

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    age: new FormControl('',[Validators.required, Validators.min(30), Validators.max(60)]),
    address: new FormControl('',Validators.required)
  });

  @Output() public sendData = new EventEmitter<boolean>()
  submit(){
    this.userLoggedIn = !this.userLoggedIn
    this.sendData.emit(this.userLoggedIn)
    
  }

  ageValidRange() {
    if(this.isValid('age')){
      (this.loginForm.controls['age'].errors 
      && (this.loginForm.controls['age'].errors['min'] || this.loginForm.controls['age'].errors['max']) ? false : true)
      return  this.loginForm.controls['age'].errors 
      && (this.loginForm.controls['age'].errors['min'] || this.loginForm.controls['age'].errors['max']) ? false : true;
    }
    return true;
  }

  isValid(controlName) {
    return this.loginForm.controls[controlName].errors && this.loginForm.controls[controlName].errors.required ? false : true;
  }
}

