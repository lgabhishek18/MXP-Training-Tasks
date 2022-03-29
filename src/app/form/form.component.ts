import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: any={}
  getValues(val: any){
    console.warn(val);
    this.user= val;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
