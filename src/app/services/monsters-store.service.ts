import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Monster } from '../models/monster';
import { backoff } from '../operators/backoff';

@Injectable({
  providedIn: 'root',
})
export class MonstersStoreService {
  #monsters = new BehaviorSubject<Monster[]>([]);
  #selectedMonsters = new BehaviorSubject<Partial<Monster>>({});
  readonly monsters$ = this.#monsters.asObservable();
  readonly selectedMonsters$ = this.#selectedMonsters.asObservable();

  constructor(private http: HttpClient) {}

  getMonsters$ = (params = '') =>
    this.http.get<Monster[]>(`http://localhost:3000/monsters?q=${params}`).pipe(
      shareReplay(),
      tap((monsters) => this.#monsters.next(monsters)),
      backoff(10, 250),
      catchError((error) => {
        console.error('error', `${error}`);
        return of(error);
      })
    );

  selected = (monster: Monster): void => this.#selectedMonsters.next(monster);

}
