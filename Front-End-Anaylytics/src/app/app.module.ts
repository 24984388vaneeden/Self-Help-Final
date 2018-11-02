import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TaskAssigningComponent } from './task-assigning/task-assigning.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGaurd } from './Services/Auth/Authentication.gaurd';
import { ApiService } from './Services/General/api.service';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: AnalyticsComponent   , canActivate: [AuthenticationGaurd]},
  {path: '', redirectTo: '/home', pathMatch: 'full'} 
]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AnalyticsComponent,
    TaskAssigningComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationGaurd, HttpClient, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
