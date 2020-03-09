import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MainComponent } from "./main/main.component";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  player;

  constructor(private http: HttpClient) { }


  setplayer(n) {

    this.player = n;

  }
  getplayer() {
    return this.player;
  }
  editplayer(player) {
    this.player = player;
  }
  /* add(Player: players): Observable<players> {
     return this.http.post<Player>(this.heroesUrl, player, httpOptions).pipe(
       tap((newHero: Hero) => this.log(`added player w/ id=${newPlayer.id}`)),
       catchError(this.handleError<players>('add'))
     );
   }*/
}
