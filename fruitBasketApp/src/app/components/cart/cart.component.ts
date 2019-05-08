import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../entities/product.entity';
import { Item } from '../../entities/item.entity';
import { ProductService } from '../../services/product.service';

// component
@Component({
  templateUrl: 'cart.component.html'
})

// class definition
export class CartComponent implements OnInit {
  // variables
  private items: Item[] = [];
  private total: number = 0;

  // constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  // OnInit Method
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];

      if (id) {
        // If Id is present get the Product data for Item
        var item: Item = {
          product: this.productService.showOne(id),
          quantity: 1
        };

        // Check for localstorage variable and push the data
        if (localStorage.getItem('cart') == null) {
          console.log(localStorage.getItem('cart'));
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {
          let cart: any = JSON.parse(localStorage.getItem('cart'));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product.id == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          }
          else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    });
  }

  // Method to load localstorage cart variable
  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
    }
  }

  // Method to remove item from cart
  removeItem(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

}
