import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consumerlogin } from './consumerlogin';
import { Farmerlog } from './consumerlog';

@Injectable({
  providedIn: 'root'
})
export class ConsumerlogService {
  httpBaseUrl: string = "http://localhost:9098/rest/api";

  constructor(private myhttp: HttpClient) { }

  getAllProducts() {
    return this.myhttp.get(this.httpBaseUrl + "/consumerlogin");
  }

  addProducts(cllogin: Consumerlogin) {
    return this.myhttp.post(this.httpBaseUrl + "/consumerlogin", cllogin);
  }
  getAllProduct() {
    return this.myhttp.get(this.httpBaseUrl + "/farmerlogin");
  }

  addProduct(cllogin: Farmerlog) {
    return this.myhttp.post(this.httpBaseUrl + "/farmerlogin", cllogin);
  }
}
