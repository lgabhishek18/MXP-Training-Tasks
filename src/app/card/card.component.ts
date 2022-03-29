import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  salary: any = "";
  status: string = "";
  fun() {
    var check = /^[0-9]+$/;
    if (!check.test(this.salary)) {
      alert("only enter numeric values");
    } else {
      if (this.salary < 20000) {
        this.status = "Sorry But you are not eligible for any card."
      }
      else if (this.salary >= 20000 && this.salary < 30000) {
        this.status = "You are eligible for silver card"
      }
      else if (this.salary >= 30000 && this.salary < 40000) {
        this.status = "You are eligible for gold card"
      }
      else {
        this.status = "you are eligible fot platinum card"
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
