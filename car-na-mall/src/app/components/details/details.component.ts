import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  public rent: any = "";
   constructor(private api: ApiService, private activeRoute: ActivatedRoute){}


   ngOnInit(): void {
    const {id} = this.activeRoute.snapshot.params;
     this.api.getOneRent(id)
     .subscribe(res => {
      this.rent = res.resu;
     });
   }
}
