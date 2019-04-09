import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoteriaService {

  private _url = "http://www.omdbapi.com/?i=tt3896198&apikey=b8f06d05";
  
  constructor(private httpClient: HttpClient) { }

  getResultado() {
    return this.httpClient.get(this._url);
  }
}
