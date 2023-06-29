import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

   signupUsers: any[] = [];

   signupObj: any = {
    userName: '',
    email: '',
    password: '',
   }

   loginObj: any = {
      email: '',
      password: ''
   }

  constructor() {

  }

  ngOnInit(): void {
    const localUsers = localStorage.getItem('signupUsers');
     if (localUsers != null) {
      this.signupUsers = JSON.parse(localUsers);
     }
    
  }

  onSignUp(): void {
    this.signupUsers = [...this.signupUsers, this.signupObj];
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
     }

  }

  onLogin(): void {
     const isUserExist = this.signupUsers
     .find(m => m.email == this.loginObj.email
      &&
     m.password == this.loginObj.password);

     if (isUserExist !== undefined) {
       alert('User Logged in Successfully!');
     } else {
      alert('Wrong Username or Password!');
     }

     this.loginObj = {
      email: '',
      password: ''
   }

  }

}
