import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/Product";
@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() OnAmountSelect:EventEmitter<Product> = new EventEmitter;
  @Output() AddToCart:EventEmitter<Product> = new EventEmitter;
  amount = 0;
  options = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
  ];

  constructor() {
    this.product ={
      id:-1,
      name:"test",
      price:0,
      url:"",
      description:"test des"
    }
    
  }

  ngOnInit(): void {}
  onAmountSelect(value: number): void {
    this.amount = value;
  }

  addToCart(product:Product): void {
    //
    alert("added to cart")
  }
}
