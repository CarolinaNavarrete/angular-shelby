import { Component, OnInit } from '@angular/core';
import { ProtractorBrowser } from 'protractor';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beer ={
    "name": "Negra",
    "type": "Porter",
    "price": 120,
    "stock": 5,
    "image":"assets/img/porter.jpeg"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
