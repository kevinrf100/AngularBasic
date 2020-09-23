import { product } from './../products.model';
import { ProductServicervice } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  product: product = {
    name:'',
    price: null
  }

  constructor(private productServices: ProductServicervice, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productServices.creat(this.product).subscribe(() => {
      this.productServices.showMenssage("Produto Criado!");
      this.router.navigate(['/products']);
    });
    
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
