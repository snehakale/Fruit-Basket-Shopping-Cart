import { Component, OnInit} from "@angular/core";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material';

import { ProductService } from '../../services/product.service';
import { Product } from '../../entities/product.entity';

// Component declarations
@Component({
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})

// class definition
export class ProductComponent implements OnInit {
  // variables
  private products: Product[];
  productSearchCtrl = new FormControl();
  filteredProducts: Observable<Product[]>;
  displayedColumns: string[] = ['Name', 'Price', 'Photo', 'Id'];
  dataSource;

  // constructor
  constructor(private productService: ProductService) { }

  // OnInit Method
  ngOnInit() {
    this.products = this.productService.showAll();
    this.dataSource = new MatTableDataSource(this.products);
    // Filtered data 
    this.dataSource.filterPredicate =
      (data: Product, filter: string) => !filter || data.name.toLowerCase().includes(filter.toLowerCase());
  }

  // Method to filter datasource
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
