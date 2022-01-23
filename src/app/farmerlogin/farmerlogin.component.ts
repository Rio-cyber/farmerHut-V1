import { Component, OnInit } from '@angular/core';
import { Farmerlog } from '../consumerlog';
import { ConsumerlogService } from '../consumerlog.service';
@Component({
  selector: 'app-farmerlogin',
  templateUrl: './farmerlogin.component.html',
  styleUrls: ['./farmerlogin.component.css']
})
export class FarmerloginComponent implements OnInit {
  cllogin: Farmerlog;
  constructor(private clservice: ConsumerlogService) {
    this.cllogin = new Farmerlog();
  }
  savecl(clForm: any) {
    this.cllogin = clForm.value;
    this.clservice.addProduct(this.cllogin).subscribe(
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
