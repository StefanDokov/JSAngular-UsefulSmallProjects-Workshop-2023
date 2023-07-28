import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { firstValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  usera: any = {};
  public rent: any = "";
  isRenting: boolean = false;

   constructor(private api: ApiService, private activeRoute: ActivatedRoute, private auth: AuthService, private router: Router,
    private toast: NgToastService){}

    get isLogged(): boolean {
      return this.auth.isLoggedIn;
    }

   ngOnInit(): void {

    const {id} = this.activeRoute.snapshot.params;
     this.api.getOneRent(id)
     .subscribe(res => {
      this.rent = res.resu;
     });
     if (this.isLogged) {
     this.auth.getProfile().subscribe(
      res => this.usera = res.user
     )  
     } 
      
    
   }

   isRentingClick() {
    return this.isRenting = !this.isRenting;
   }
   
  
   
}
