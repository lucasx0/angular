import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    
  }

 createProduct(): void {
  this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Produto criado! Operação concluida com Sucesso.')
    this.router.navigate(['/products'])
  })

  
 }

 cancel(): void{
  this.router.navigate(['/products'])
 }

}
