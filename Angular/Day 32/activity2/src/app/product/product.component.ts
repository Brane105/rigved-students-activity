import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {name: "Mobile", brand: ["Vivo", "Oppo", "Oneplus"]},
    {name: "Laptop", brand: ["HP", "Dell", "Lenovo", "Acer"]}
  ]
}
