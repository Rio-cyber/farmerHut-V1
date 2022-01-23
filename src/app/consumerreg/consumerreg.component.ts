import { Component, OnInit } from '@angular/core';
import { Consumerreg } from '../consumerreg';
import { CustomerregService } from '../customerreg.service';
@Component({
  selector: 'app-consumerreg',
  templateUrl: './consumerreg.component.html',
  styleUrls: ['./consumerreg.component.css']
})
export class ConsumerregComponent implements OnInit {
  cllogin: Consumerreg;
  food = "./assets/food1.jpg";
  constructor(private crservice: CustomerregService) {
    this.cllogin = new Consumerreg();
  }
  savecl(clForm: any) {
    this.cllogin = clForm.value;
    this.crservice.addProducts(this.cllogin).subscribe(
      (data) => {
        console.log(data);
        alert("You are successfully registered!!You can now log in")
      },
      (error) => console.log(error)

    )
  }
  ngOnInit(): void {
  }

}
