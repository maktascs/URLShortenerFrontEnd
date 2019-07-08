import { Component, OnInit } from '@angular/core';
import { UrlsService } from '../urls.service';
import { UserService } from '../user.service';
import { ThrowStmt } from '@angular/compiler';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-myurls',
  templateUrl: './myurls.component.html',
  styleUrls: ['./myurls.component.css']
})
export class MyurlsComponent implements OnInit {
userid:any={};
urls:any=[];
deletedSuccess=false;
loading = true;
  constructor(private urlService:UrlsService,private userService:UserService) { }

  ngOnInit() {
    
    this.getuserId();
    this.getUrls();
    
  }
  getuserId(){
  this.userid = JSON.parse(localStorage.getItem('userdata'));
  //console.log(this.userid)
  }

  deleteUrl(val:any){
  
this.urlService.deleteUrl(val).subscribe(
  data=>{
  this.deletedSuccess=true;
  setTimeout(()=>{
location.reload();
  },2000);
    
  },
  error =>{
    alert("Something wrong")
  });
  }

  getUrls(){
    this.urlService.getUrls(this.userid.id).subscribe(
      data =>{
        this.urls =data;
        this.loading=false;
        //console.log(this.urls);
      },
      error => {
        alert(error.statusText);
      }
    );
    //console.log(this.userid.id)
  }


}
