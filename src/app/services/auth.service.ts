
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private isLogged:BehaviorSubject<Boolean>
userInfo:User={}
userValidate=true
  constructor(private httpClient:HttpClient ,private router:Router) { 
    this.isLogged=new BehaviorSubject<Boolean>(this.isUserLogged)
  }
adminLogin(user:User){
 this.httpClient.post<User>(`${environment.apiUrl}/User/Login`,user).subscribe(res=>{
  localStorage.setItem('Token',JSON.stringify(res.AccessToken))
  localStorage.setItem('userName',JSON.stringify(res.FirstName))
  this.isLogged.next(true)
  this.router.navigate(["/"]) 
 })
}
// logout(){
//    this.httpClient.get(`${environment.apiUrl}/api/elabdfoods/User/Logout/:${userId}`).subscribe(res=>{

//    })
//    localStorage.removeItem('Token')
// }
get  isUserLogged():Boolean{
    return (localStorage.getItem('Token'))?true:false
  }

getLoggedStatus():Observable<Boolean>{
  return this.isLogged.asObservable()
}  
}
