import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.css']
})
export class ExemplosComponent implements OnInit {

  constructor() { }

  movie: any = {
    title: "Fight club",
    release: new Date(1999, 4, 21),
    budget: 300.000
  }

  ngOnInit() {
  }

}
