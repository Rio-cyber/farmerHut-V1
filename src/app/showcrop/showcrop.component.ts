import { Component, OnInit } from '@angular/core';
import { CropService } from '../crop.service';
@Component({
  selector: 'app-showcrop',
  templateUrl: './showcrop.component.html',
  styleUrls: ['./showcrop.component.css']
})
export class ShowcropComponent implements OnInit {
  products: any;
  constructor(private prodService: CropService) { }

  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe(
      (data) => {
        console.log(data);
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
