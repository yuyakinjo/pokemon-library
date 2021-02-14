import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Monster } from '../models/monster';

@Injectable({
  providedIn: 'root',
})
export class MonstersStoreService {
  constructor(private http: HttpClient) {}

  #monsters = new BehaviorSubject<Monster[]>([]);

  monsters$ = this.#monsters.asObservable();

  getMonsters$ = (params = '') =>
    this.http
      .get<Monster[]>(`http://localhost:3000/monsters?q=${params}`)
      .pipe(tap((monsters) => this.#monsters.next(monsters)));
}
