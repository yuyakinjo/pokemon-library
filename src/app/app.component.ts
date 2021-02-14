import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MonstersStoreService } from './services/monsters-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent {
  title = 'pokemon-library';

  readonly vm$ = combineLatest([this.MonstersStoreService.monsters$]).pipe(map(([monsters]) => ({ monsters })));
  readonly getMonsters = this.MonstersStoreService.getMonsters$();

  constructor(private MonstersStoreService: MonstersStoreService) {}
}
