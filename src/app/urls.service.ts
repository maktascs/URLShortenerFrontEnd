import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
 
  
  
  base_url:String = "http://localhost:8080";

  constructor(private http:HttpClient,private router:Router) { }

  postURL(id:any, value: any) {
    let bdy = {};
    bdy["createdAt"] = "";
    bdy["longURL"] = value.LongURL;
    bdy["shortURL"]="";

    //console.log(value.LongURL+id)
    return this.http.post(this.base_url+"/urls/"+id+"/add",bdy).pipe(
      map(
        data=>{
         
          return data;
        },error =>{
          alert(error)
        }
      )
    )
  }


  getUrls(id:number):any {
    //console.log(id)
   return this.http.get(this.base_url+"/urls/"+id+"/all").pipe(
    map(
    data => {
      localStorage.setItem('userurls',JSON.stringify(data));
      return data;
    }
  )
  );
  }

  getLongURL(val: any) {
    //console.log(val)
    return this.http.get(this.base_url+"/urls/getUrl/"+val).pipe(
      map(
      data => {
        //console.log(data)
        return data;
      },
      error =>{
        console.log(error)
      }
    )
    );
  }


  deleteUrl(val: any) {
    let userid = JSON.parse(localStorage.getItem('userdata'));
    console.log("userid" + userid.id);
    return this.http.delete(this.base_url+"/urls/"+userid.id+"/"+val+"/delete").pipe(
      map(
        data=>{
          return data;
        }
      )
    )
    
  }



}
