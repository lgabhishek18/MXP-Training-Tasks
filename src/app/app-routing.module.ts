import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) }, 
  { path: 'bank', loadChildren: () => import('./bank/bank.module').then(m => m.BankModule) }, 
  { path: 'emi', loadChildren: () => import('./emi/emi.module').then(m => m.EmiModule) }, 
  { path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

