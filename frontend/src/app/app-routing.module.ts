import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { HomeComponent }  from './views/home/home.component';

import { ProductCrudComponent } from  './views/product-crud/product-crud.component';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreatComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
