import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
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

 test(){
  let url = 'https://runescape.wiki/api.php?action=parse&format=json&summary=stats&page=Abyssal_lord&formatversion=2'
  return this.http.get<any>(url).pipe(
    catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('rscombat.Service.index(): error retrieving combat logs: ' + err)
        );
      })
  )
 }









}
