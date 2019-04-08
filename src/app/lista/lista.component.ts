import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  criterio: string = ""
  constructor() { }

  filmes: any[] = [
    {
      titulo: "Gladiador",
      ano: new Date(1999, 4, 12)
    },
    {
      titulo: "Rei Leão",
      ano: new Date(1994, 12, 20)
    },
    {
      titulo: "Venom",
      ano: new Date(2018, 4, 30)
    },
    {
      titulo: "Homem Aranha",
      ano: new Date(2000, 11, 12)
    },
    {
      titulo: "As Branquelas",
      ano: new Date(2002, 4, 12)
    },
    {
      titulo: "Forrest Gump",
      ano: new Date(1994, 4, 12)
    }
  ]
  ngOnInit() {
  }

  

}

