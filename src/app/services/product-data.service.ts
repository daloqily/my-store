import { Injectable } from "@angular/core";
import { Product } from "../models/Product";

@Injectable({
  providedIn: "root",
})
export class ProductDataService {
  constructor() {}

  public product: Product;
}
