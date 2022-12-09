import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentUserId: number = 0

  constructor(private authservice: AuthService,
    private router: Router,
    private httpClient: HttpClient) {
  }
  ngOnInit() {
    
    
  }

  logout() {
    this.httpClient.get(`${environment.apiUrl}/User/Logout/:${this.authservice.userInfo._id}`).subscribe(res => {
    })
    this.router.navigate(['/login'])
    localStorage.removeItem('Token')
    localStorage.removeItem('userName')
  }
  get getUserName(){
    return localStorage.getItem('userName')
  }
}
