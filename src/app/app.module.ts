import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule { 
  constructor(private injector: Injector){}
  ngDoBootstrap(){
      const customEle = createCustomElement(AppComponent, {injector: this.injector});
      customElements.define('js-poland', customEle)
  }
}