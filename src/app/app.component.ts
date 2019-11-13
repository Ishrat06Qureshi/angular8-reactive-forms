import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( private fb : FormBuilder) {}
  userProfile  = this.fb.group({
    name: [''],
    email:[''],
    phone:[''],
    address:['']
  })

  Submit = () => {
    console.log(this.userProfile.value)
  }
  // userProfile =  new FormGroup({
  //   name : new FormControl("" , Validators.required),
  //   email : new FormControl(""),
  //   phone: new FormControl(""),
  //   address: new FormControl("")
  // })
  // Submit = () => {
  //   console.log(this.userProfile.controls['name'].value)
  // }
  // employeeProfile = new FormGroup({
  //   name: new FormControl(""),
  //   id: new FormControl(""),
  //   address: new FormControl("")
  // })

  // Submit  = () => {
  //   console.log(this.employeeProfile.value)
  // }
}
