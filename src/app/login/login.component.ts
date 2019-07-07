import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  invalidLogin=false;
  success= false;
  err=false;
  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserService) { }

  ngOnInit() {
  this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(1)]]
  });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid || this.invalidLogin) {
        return;
    }

    else{
      this.userService.authenticate( this.loginForm.value.username, this.loginForm.value.password ).subscribe(
      data=> {
        this.invalidLogin=false;
        this.success= true;
        setTimeout(()=>{
        this.router.navigate(['myurls']);
        },3000);
        
        
      },
      error =>{
        this.invalidLogin=true;
         this.err = true;
       setTimeout(()=>{
        location.reload()
       },2000);
         
        }
      
      );
     }
    }
  


}
