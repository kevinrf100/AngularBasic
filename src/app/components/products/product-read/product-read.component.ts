import { ProductServicervice } from './../product.service';
import { product } from './../products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: product[];

  displayedColumns = ['id', 'name', 'price'];

  constructor(private productServicervice: ProductServicervice) { }

  ngOnInit(): void {
    this.productServicervice.read().subscribe((product) => {
      this.products = product;
      console.log(product);
    });
  }
}
