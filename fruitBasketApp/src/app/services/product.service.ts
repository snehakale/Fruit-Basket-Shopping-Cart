import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

// class definition
export class ProductService {
  // variable
  private products: Product[];

  // constructor with model data
  constructor() {
    this.products = [
      {
        id: 'p1', name: 'Apple', price: 10, photo: 'img1.jpg',
        info: 'Apples are high in fiber, vitamin C and various antioxidants very filling, considering their low calorie content. '},
      {
        id: 'p2', name: 'BlueBerry', price: 7, photo: 'img2.jpg',
        info: 'Blueberies are low in calories and incredibly healthy, potentially regulating blood sugar levels and aiding heart and brain health.' },
      {
        id: 'p3', name: 'Kiwi', price: 6, photo: 'img3.jpg',
        info: 'Kiwis are full of nutrients like vitamin C, vitamin K, vitamin E, folate, and potassium. They also have a lot of antioxidants and are a good source of fiber.' },
      {
        id: 'p4', name: 'Mango', price: 12, photo: 'img4.jpg',
        info: 'Mangoes decreases the risk of obesity and overall mortality, diabetes, and heart disease and promotes a healthy complexion and hair, increased energy, and overall lower weight.'},
      {
        id: 'p5', name: 'Orange', price: 7, photo: 'img5.jpg',
        info: 'Oranges are a healthy source of fiber, vitamin C, thiamine, folate, and antioxidants. They have multiple health benefits.'},
      {
        id: 'p6', name: 'Strawberry', price: 8, photo: 'img6.jpg',
        info: 'Strawberries are an excellent source of vitamin C and manganese and also contain decent amounts of folate (vitamin B9) and potassium.They are very rich in antioxidants and plant compounds, which may have benefits for heart health and blood sugar control. ' },
    ];
  }

  // method to show all products
  showAll(): Product[] {
    return this.products;
  }

  // method to show selected product
  showOne(id: string): Product {
    return this.products[this.getSelectedProduct(id)]
  }

  // method to get the id for selected product
  getSelectedProduct(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

}
