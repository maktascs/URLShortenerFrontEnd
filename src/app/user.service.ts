import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  base_url:String = "http://localhost:8080";
  
  constructor(private http: HttpClient, private router:Router) {
     
   }

   logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('basicAuth');
    localStorage.removeItem('userdata');
    localStorage.removeItem('userurls');
    this.router.navigate(['login']);
  }

  

isUserLoggedIn(){
  let user = localStorage.getItem('username');
  return !(user === null);
}


  authenticate(username,password) {
    const header = new HttpHeaders({Authorization: 'Basic '+btoa(username+':'+password)});
   return this.http.get(this.base_url+'/users/login',{headers:header}).pipe(
   map(
   userData => {
     localStorage.setItem('username',username);
     let authString = 'Basic '+ btoa(username+':'+password);
     localStorage.setItem('basicAuth',authString);
     localStorage.setItem('userdata',JSON.stringify(userData));
     

     return userData;
   }
 )
 );

  }


  addUser(value:any){
    const bdy = 
      {
        "id":0,
        "createdAt":"",
        "email":value.email,
        "enabled":1,
        "username":value.username,
        "firstname":value.firstName,
        "lastname":value.lastName,
        "password":value.password
      }
    
    return this.http.post(this.base_url+'/users/add',bdy).pipe(
      map(
      userData => {
           
   
        return userData;
      }
    )
    );
  }
}
