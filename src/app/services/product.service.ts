import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/data.json");
  }
}
