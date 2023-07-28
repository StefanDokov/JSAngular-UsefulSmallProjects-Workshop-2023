import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  usera: any = {};
  public rent: any = "";

  constructor(private api: ApiService, private activeRoute: ActivatedRoute, private auth: AuthService, private router: Router,
    private toast: NgToastService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      value => {
        this.usera = value;
      }
    );

    const {id} = this.activeRoute.snapshot.params;
     this.api.getOneRent(id)
     .subscribe(res => {
      this.rent = res.resu;
     });

     if (this.rent !== this.usera.user._id) {
      this.toast.error({detail: "ERROR", summary: "You are not an owner of this rent!", duration: 5000});
      this.router.navigate(['home'])
     }
    
  }

}
