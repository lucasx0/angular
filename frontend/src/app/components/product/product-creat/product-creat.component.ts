import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {



  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    
  }

 createProduct(): void {
  this.productService.showMessage('Produto criado! Operação concluida com Sucesso.')
 }

 cancel(): void{
  this.router.navigate(['/products'])
 }

}
