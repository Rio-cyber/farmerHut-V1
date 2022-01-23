import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Consumerreg } from './consumerreg';
import { Farmerreg } from './consumerreg';
@Injectable({
  providedIn: 'root'
})
export class CustomerregService {

  httpBaseUrl: string = "http://localhost:9098/rest/api";

  constructor(private myhttp: HttpClient) { }

  getAllProducts() {
    return this.myhttp.get(this.httpBaseUrl + "/consumerreg");
  }

  addProducts(cllogin: Consumerreg) {
    return this.myhttp.post(this.httpBaseUrl + "/consumerreg", cllogin);
  }
  getAllProduct() {
    return this.myhttp.get(this.httpBaseUrl + "/farmerreg");
  }

  addProduct(cllogin: Farmerreg) {
    return this.myhttp.post(this.httpBaseUrl + "/farmerreg", cllogin);
  }
}
