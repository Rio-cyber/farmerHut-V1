import { Component, OnInit } from '@angular/core';
import { CustomerregService } from '../customerreg.service';
import { Farmerreg } from '../consumerreg';
@Component({
  selector: 'app-farmerregister',
  templateUrl: './farmerregister.component.html',
  styleUrls: ['./farmerregister.component.css']
})
export class FarmerregisterComponent implements OnInit {

  cllogin: Farmerreg;
  constructor(private clservice: CustomerregService) {
    this.cllogin = new Farmerreg();
  }
  savecl(clForm: any) {
    this.cllogin = clForm.value;
    this.clservice.addProduct(this.cllogin).subscribe(
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
