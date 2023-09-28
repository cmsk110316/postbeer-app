import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailIbuComponent } from './product-detail-ibu/product-detail-ibu.component';
import { ProductDetailHopComponent } from './product-detail-hop/product-detail-hop.component';
import { ProductDetailStyleComponent } from './product-detail-style/product-detail-style.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDetailIbuComponent,
    ProductDetailHopComponent,
    ProductDetailStyleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
