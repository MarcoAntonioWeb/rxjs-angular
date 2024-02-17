import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultados } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes'

  constructor(private http: HttpClient) { }

  buscar(valorDigitado: string): Observable<any> {
    const params = new HttpParams().append('q', valorDigitado);

    return this.http.get<LivrosResultados>(this.API, {params})
    .pipe(
      tap(retornoAPI => console.log('Fluxo de tap', retornoAPI)),
      map(resultado => console.log(resultado.items)),
      tap(resultado => console.log('Fluxo depois do map'))
    )
  }
}
