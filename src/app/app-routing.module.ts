import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTwoComponent } from './featureComponents/page-two/page-two.component';
import { PageThreeComponent } from './featureComponents/page-three/page-three.component';
import { ContactUsComponent } from './featureComponents/contact-us/contact-us.component';
import { HomepageComponent } from './featureComponents/homepage/homepage.component';
import { PageNotFoundComponent } from './featureComponents/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: 'page-three/:productId', component: PageThreeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
