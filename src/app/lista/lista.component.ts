import { FilmeService } from './../service/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  criterio: string = ""
  
  constructor(private _filmeService: FilmeService) { 
  }

  filmes: any[] = [];

  ngOnInit() {
    this.filmes = this._filmeService.getAll();
  }

  

}

