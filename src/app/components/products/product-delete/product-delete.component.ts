import { ProductServicervice } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from './../products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: product;
  id: string;

  constructor(private router: Router, private productService: ProductServicervice, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(this.id).subscribe((product) => {
      this.product = product;
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMenssage("Produto deletado com sucesso!");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
