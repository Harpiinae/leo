import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductsComponent } from './products/products.component';
import { SolutionsComponent } from './solutions/solutions.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/solutions', pathMatch: 'full' },
  { path: 'contact', component:  ContactComponent },
  { path: 'portfolio', component:  PortfolioComponent },
  { path: 'products', component:  ProductsComponent },
  { path: 'solutions', component:  SolutionsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}