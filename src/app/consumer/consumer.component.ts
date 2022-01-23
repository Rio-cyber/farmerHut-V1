import { Component, OnInit } from '@angular/core';
import { Consumerlog } from '../consumerlog';
import { ConsumerlogService } from '../consumerlog.service';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NewcropComponent } from '../newcrop/newcrop.component';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  cllogin: Consumerlog;
  constructor(private clservice: ConsumerlogService, private router: Router) {
    this.cllogin = new Consumerlog();
  }
  savecl(clForm: any) {
    this.cllogin = clForm.value;
    this.clservice.addProducts(this.cllogin).subscribe(
      (data) => {
        console.log(data);

        alert("You are successfully logged in!! Welcome to FarmerHut")

      },
      (error) => console.log(error)

    )
  }
  ngOnInit(): void {
  }

}
