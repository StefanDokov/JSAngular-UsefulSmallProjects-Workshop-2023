import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public useri: any | undefined;
  public rent: any = "";
  public isRenting: boolean = false;

  

   constructor(private fb: FormBuilder, private api: ApiService, private activeRoute: ActivatedRoute, private auth: AuthService, private router: Router,
    private toast: NgToastService){}

    isLogged = this.auth.isLogged()

   ngOnInit(): void {

    this.getRenta();
     
     if (this.isLogged) {
      
     this.getUseri();
     } 
      
   }


   getRenta() {
    const {id} = this.activeRoute.snapshot.params;
     this.api.getOneRent(id)
     .subscribe(res => {
      this.rent = res.resu;
     });
   }

   getUseri(){
    this.auth.user$.subscribe(
      res => this.useri = res
     )  
   }
   isRentingClick() {
    return this.isRenting = !this.isRenting;
   }
   
  
   
}
