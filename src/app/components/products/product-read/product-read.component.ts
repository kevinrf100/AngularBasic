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

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productServicervice: ProductServicervice) { }

  ngOnInit(): void {
    this.readData();
  }

  readData(){
    this.productServicervice.read().subscribe((product) => {
      this.products = product;
    });
  }

  delete(id: string){
    this.productServicervice.delete(id).subscribe(() => {
      this.productServicervice.showMenssage("Produto excluido com sucesso");
      this.readData();
    });
  }
}
