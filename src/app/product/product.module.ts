import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailIbuComponent } from '../product-detail-ibu/product-detail-ibu.component';
import { ProductDetailHopComponent } from '../product-detail-hop/product-detail-hop.component';
import { ProductDetailStyleComponent } from '../product-detail-style/product-detail-style.component';

const routes: Routes = [
    {
         path: 'products', component:ProductComponent,
         children:[
             { path: '', component:ProductListComponent },
             { path: ':noteId', component:ProductDetailComponent },
             { path: ':noteId/ibu', component:ProductDetailIbuComponent },
             { path: ':noteId/hop', component:ProductDetailHopComponent },
             { path: ':noteId/style', component:ProductDetailStyleComponent },

         ]
    }
  ];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
