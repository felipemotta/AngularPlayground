import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';
import { WelcomeComponent } from './Home//welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
