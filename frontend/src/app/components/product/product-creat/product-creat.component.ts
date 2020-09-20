import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  propLegal = 'qualquer'

  constructor() { }

  ngOnInit() {
  }

  fazerAlgo(): void {
    console.log('Fazendo Algo!')
  }

}
