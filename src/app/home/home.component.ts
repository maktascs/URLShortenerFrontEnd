import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlsService } from '../urls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
shortURL:string;
longURL:any={};
  constructor(private route:ActivatedRoute, private urlService:UrlsService,private router:Router) { }

  ngOnInit() {
    this.shortURL = this.route.snapshot.paramMap.get('shortURL')
    
    if(this.shortURL !==null){
    this.getLongURL(this.shortURL);
    }
    

  }
  getLongURL(val){
     this.urlService.getLongURL(val).subscribe(
      data=>{
     
      console.log(data.longURL)
      window.location.href = data.longURL;

      },
      error =>{
        alert("Something wrong")
      });
  }

}
