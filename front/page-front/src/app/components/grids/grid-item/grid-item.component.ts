import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-grid-item',
  imports: [
    CommonModule,
    DataViewModule,
    FormsModule,
    SelectButtonModule,
    PickListModule,
    OrderListModule,
    TagModule,
    ButtonModule,
    DatePipe
  ],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss'
})
export class GridItemComponent {
  layout: 'list' | 'grid' = 'list';

  options = ['list', 'grid'];

  products: any[] = [];

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];

  constructor() {}

  ngOnInit() {

    this.products = [
      {
          "id": "1000",
          "data": new Date,
          "code": "f230fh0g3",
          "name": "Conselho de Acompanhamento e Controle Social do Fundeb",
          "description": "Product Description",
          "image": "bamboo-watch.jpg",
          "price": 65,
          "category": "Accessories",
          "quantity": 24,
          "inventoryStatus": "INSTOCK",
          "rating": 5,
          "logo": "assets/pma/logo-cacs.jpg"
      },
      {
        "data": new Date,
          "id": "1001",
          "code": "nvklal433",
          "name": "Conselho de Alimentação Escolar",
          "description": "Product Description",
          "image": "black-watch.jpg",
          "price": 72,
          "category": "Accessories",
          "quantity": 61,
          "inventoryStatus": "INSTOCK",
          "rating": 4,
          "logo": "assets/pma/logo-cae.jpg"
      },
      {
        "data": new Date,
          "id": "1002",
          "code": "zz21cz3c1",
          "name": "Conselho Municipal de Assistência Social",
          "description": "",
          "image": "blue-band.jpg",
          "price": 79,
          "category": "Fitness",
          "quantity": 2,
          "inventoryStatus": "LOWSTOCK",
          "rating": 3,
          "logo": "assets/pma/logo-cmas.jpg"
      },
      {
        "data": new Date,
          "id": "1003",
          "code": "244wgerg2",
          "name": "Conselho Municipal dos Direitos da Criança e do Adolescente",
          "description": "Product Description",
          "image": "blue-t-shirt.jpg",
          "price": 29,
          "category": "Clothing",
          "quantity": 25,
          "inventoryStatus": "INSTOCK",
          "rating": 5,
          "logo": "assets/pma/logo-cmdca.jpg"
      },
      {
        "data": new Date,
          "id": "1004",
          "code": "h456wer53",
          "name": "Conselho Municipal dos Direitos da Mulher",
          "description": "Product Description",
          "image": "bracelet.jpg",
          "price": 15,
          "category": "Accessories",
          "quantity": 73,
          "inventoryStatus": "INSTOCK",
          "rating": 4,
          "logo": "assets/pma/logo-cmdm.jpg"
      },
      {
        "data": new Date,
          "id": "1005",
          "code": "av2231fwg",
          "name": "Conselho Municipal dos Direitos da Pessoa com Deficiência",
          "description": "Product Description",
          "image": "brown-purse.jpg",
          "price": 120,
          "category": "Accessories",
          "quantity": 0,
          "inventoryStatus": "OUTOFSTOCK",
          "rating": 4,
          "logo": "assets/pma/logo-cmdpd.jpg"
      }
  ]

      this.sourceCities = [
          { name: 'San Francisco', code: 'SF' },
          { name: 'London', code: 'LDN' },
          { name: 'Paris', code: 'PRS' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Berlin', code: 'BRL' },
          { name: 'Barcelona', code: 'BRC' },
          { name: 'Rome', code: 'RM' }
      ];

      this.targetCities = [];

      this.orderCities = [
          { name: 'San Francisco', code: 'SF' },
          { name: 'London', code: 'LDN' },
          { name: 'Paris', code: 'PRS' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Berlin', code: 'BRL' },
          { name: 'Barcelona', code: 'BRC' },
          { name: 'Rome', code: 'RM' }
      ];
  }

  getSeverity(product: any) {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warn';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return 'info';
      }
  }
}
