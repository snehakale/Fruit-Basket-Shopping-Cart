import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { routing } from './app.routing';
import { ProductService } from './services/product.service';
import { ProductInfoComponent } from './components/productInfo/productInfo.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routing,
    MatTableModule
  ],
  providers: [
    ProductService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
