import { Filme } from './../models/filme';
import { LoteriaService } from './../service/loteria.service';
import { FilmeService } from './../service/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  criterio: string = ""

  
  constructor(private _filmeService: FilmeService,
    private _loteriaService: LoteriaService) { 
  }

  filmes: Filme[] = [];

  ngOnInit() {
    this.filmes = this._filmeService.getAll();
 }

  search(text: string) {
    this._filmeService.search(text).subscribe(
      response=> {
        console.log((response instanceof Filme) == true);
        this.filmes.push(response);
      }
    )
  }

  

}

