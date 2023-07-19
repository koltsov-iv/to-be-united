import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FundraisingComponent} from "./pages/fundraising/fundraising.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";

const routes: Routes = [
  {
    path: '',
    component: FundraisingComponent,
  },
  {
    path: 'donate',
    component: CheckoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
