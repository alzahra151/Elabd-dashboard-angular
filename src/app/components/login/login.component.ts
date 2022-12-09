import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginstatus:Boolean;
  userValidate=true
  constructor(private authservice:AuthService,private formBilder:FormBuilder){
    this.loginstatus=this.authservice.isUserLogged
    this.loginForm=formBilder.group({
      Email:['' ,[Validators.required]],
      Password:['',[Validators.required]]
  })
  }
  
  login(){
    this.authservice.adminLogin(this.loginForm.value)
    if(!this.authservice.isUserLogged){
      this.userValidate=false
    }
  }
  ngOnInit() {
    this.authservice.getLoggedStatus().subscribe(status=>{
      this.loginstatus=status
    })
  }

}
