import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyurlsComponent } from './myurls/myurls.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddUrlComponent } from './add-url/add-url.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  {path :'',pathMatch:'full',redirectTo:'main'},
  { path: 'login', component: LoginComponent },
  {path: 'myurls',component:MyurlsComponent, canActivate:[AuthGuardService]},
{ path: 'register', component: RegisterComponent },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{path:'main', component:MainpageComponent},
{ path: 'addurl', component: AddUrlComponent, canActivate:[AuthGuardService] },
{ path: ':shortURL', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
