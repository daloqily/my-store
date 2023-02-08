import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  product: Product;
  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/data.json");
  }

  getProductById(id: number): Product {
    this.getProduct().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id == id) {
          this.product = res[i];
        }
        break;
      }
    });
    return this.product;
  }
}
