import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crop } from './crop';
@Injectable({
  providedIn: 'root'
})
export class CropService {

  httpBaseUrl: string = "http://localhost:9098/rest/api";

  constructor(private myhttp: HttpClient) { }

  getAllProducts() {
    return this.myhttp.get(this.httpBaseUrl + "/crops");
  }

  addProducts(cllogin: Crop) {
    return this.myhttp.post(this.httpBaseUrl + "/crops", cllogin);
  }
}
