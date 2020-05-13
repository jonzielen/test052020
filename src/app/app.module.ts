import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageTwoComponent } from './featureComponents/page-two/page-two.component';
import { ContactUsComponent } from './featureComponents/contact-us/contact-us.component';
import { HomepageComponent } from './featureComponents/homepage/homepage.component';
import { PageNotFoundComponent } from './featureComponents/page-not-found/page-not-found.component';
import { PageThreeComponent } from './featureComponents/page-three/page-three.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTwoComponent,
    ContactUsComponent,
    HomepageComponent,
    PageNotFoundComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
