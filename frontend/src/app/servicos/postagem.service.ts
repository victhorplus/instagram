import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Postagem } from '../model/postagem'

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  url = 'http://localhost:3000/post';
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.url, this.httpOptions)
            .pipe(
              tap(() => console.log("get post")),
              catchError(this.handleError<Postagem[]>('getPostagens', []))
            )
  }

  getPostagensByDate(dataIni: string, dataFim:string): Observable<Postagem[]>{
    var urlDate = `${this.url}?date_gte=${dataIni}&date_lte=${dataFim}`
    return this.http.get<Postagem[]>(urlDate, this.httpOptions)
            .pipe(
              tap(() => console.log(`get postagem por data: ${dataIni} : ${dataFim}`)),
              catchError(this.handleError<Postagem[]>('getPostagensByDate', []))
            )
  }



  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      console.log(error);

      return of (result as T);
    }
  }
}
