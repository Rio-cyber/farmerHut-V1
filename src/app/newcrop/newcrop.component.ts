import { Component, OnInit } from '@angular/core';
import { CropService } from '../crop.service';
import { Crop } from '../crop';
@Component({
  selector: 'app-newcrop',
  templateUrl: './newcrop.component.html',
  styleUrls: ['./newcrop.component.css']
})
export class NewcropComponent implements OnInit {
  cllogin: Crop;
  constructor(private clservice: CropService) {
    this.cllogin = new Crop();
  }
  savecl(clForm: any) {
    this.cllogin = clForm.value;
    this.clservice.addProducts(this.cllogin).subscribe(
      (data) => {
        console.log(data);
        alert("Your details has been successfully updated ")
      },
      (error) => console.log(error)

    )
  }
  ngOnInit(): void {
  }

}
