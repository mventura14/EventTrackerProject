import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Combat } from '../models/combat';

@Injectable({
  providedIn: 'root'
})
export class RSCombatService {

  private baseUrl = 'http://localhost:8084/'; // adjust port to match server
  private url = this.baseUrl + 'api/combats'; // change 'todos' to your API path

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Combat[]> {
    return this.http.get<Combat[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('rscombat.Service.index(): error retrieving combat logs: ' + err)
        );
      })
    )
  }

  getrs(): Observable<any>{
    return this.http.jsonp('https://secure.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=89', 'callback').pipe(
      map(result => console.log(result)),
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('rscombat.Service.index(): error retrieving combat logs: ' + err)
        );
      })
    );
  }












}
