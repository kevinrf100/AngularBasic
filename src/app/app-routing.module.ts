import { TesteCssClearComponent } from './views/teste-css-clear/teste-css-clear.component';
import { EdicaoComponent } from './views/edicao/edicao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreatComponent } from './components/products/product-creat/product-creat.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { ResposividadeHeaderComponent } from './views/resposividade-header/resposividade-header.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"products",
    component: ProductCrudComponent
  },
  {
    path:"products/create",
    component: ProductCreatComponent
  },
  {
    path:"products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path:"products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path:"header",
    component: ResposividadeHeaderComponent
  },
  {
    path:"edicao",
    component: EdicaoComponent
  },
  {
    path:"clear-css",
    component: TesteCssClearComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
