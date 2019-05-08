import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../entities/product.entity';

// component
@Component({
  templateUrl: 'productInfo.component.html'
})

// class definition
export class ProductInfoComponent implements OnInit {
  // variable
  private product: Product;

  // constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  // OnInit method
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      console.log(id);
      if (id) {
        this.product = this.productService.showOne(id);
      }
    });
  }
}
