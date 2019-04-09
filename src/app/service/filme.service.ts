import { Filme } from './../models/filme';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FilmeService {

  private _url: string = "http://www.omdbapi.com/?apikey=b8f06d05&";

  filmes: Filme[] = []
  constructor(private httpClient: HttpClient) { }

  getAll(): Filme[] {
    return this.filmes;
  }

  search(text: string): Observable<Filme> {
    return this.httpClient.get<Filme>(`${this._url}t=${text}`);
  }
}
