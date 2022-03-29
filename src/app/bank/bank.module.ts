import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';



@NgModule({
  declarations: [
    BankComponent
  ],
  imports: [
    CommonModule,
    BankRoutingModule,FormsModule
  ]
})
export class BankModule { }
