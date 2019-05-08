import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductInfoComponent } from './components/productInfo/productInfo.component';

// routes 
const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'info', component: ProductInfoComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
