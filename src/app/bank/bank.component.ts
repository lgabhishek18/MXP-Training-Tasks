import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  initial:any=0;
  bal:any=0;
  deposited:any=0;
  total:any=0;
  withdraw:any=0;
  result:any=0;

  constructor() { }

  ngOnInit(): void {
  }
  

  createAcc()
    {
      if(this.initial<=500)
      {
        alert("Please enter more money");
      }
      else
      {
        this.result=this.initial;
        alert("Account Created");
      }
    }

    depositmoney()
    {   
        
      let totalBalance = this.result;
      let depositAmount = this.deposited;
      let balanceAmount = Number(totalBalance) + Number(depositAmount) ;
      if(depositAmount == ''){
        alert("Amount is empty plz enter correct input ");
    } else{
  
      this.result = balanceAmount;
    }
    }
    withdrawmoney()
    {
        if(this.withdraw>this.result)
        {
            alert("Insufficient balance");
        }
        else
        {
            this.result=this.result-this.withdraw;
            alert("Money Withdraw");
        }
    }

}
