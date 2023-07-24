import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.getProfile().subscribe({
      next:() => {
        this.isAuthenticating = false;
      },
      error:() => {
        this.isAuthenticating = false;
        
      },
      complete:() => {
        this.isAuthenticating = false;
      },
    })
  }
}
