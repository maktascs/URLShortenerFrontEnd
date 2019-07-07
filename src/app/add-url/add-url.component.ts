import { Component, OnInit } from '@angular/core';
import { UrlsService } from '../urls.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {
  userid:any={};
  newurlForm: FormGroup;
  submitted = false;
  invalidLogin=false;
  success = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private urlService:UrlsService) { }

  ngOnInit() {
    this.getuserId();
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.newurlForm = this.formBuilder.group({
      LongURL:['',[Validators.required, Validators.pattern(reg)]
    ] 
  });

 
  }


  get f() { return this.newurlForm.controls; }


  getuserId(){
    this.userid = JSON.parse(localStorage.getItem('userdata'));
    //console.log(this.userid)
    }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newurlForm.invalid || this.invalidLogin) {
        return;
    }

    else{
      this.urlService.postURL( this.userid.id, this.newurlForm.value).subscribe(
      data=> {
        this.success = true;
       this.invalidLogin=false;
       
        //alert("URL is created. Your Short URL will be: " + data.shortURL);
        setTimeout(()=>{
        this.router.navigate(['myurls']);
        },3000);
       
        
      },
      error =>{
        this.invalidLogin=true;
        
        if(error.status === 500){
          alert("Invalid URL");
          location.reload();
        }
        
       
      });
     
    }
  }

}
