import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Monster } from './models/monster';
import { MonstersStoreService } from './services/monsters-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'pokemon-library';

  readonly vm$ = combineLatest([this.monstersStoreService.monsters$]).pipe(map(([monsters]) => ({ monsters })));
  readonly getMonsters$ = this.monstersStoreService.getMonsters$();
  readonly selectedMonsters$ = this.monstersStoreService.selectedMonsters$;

  constructor(private monstersStoreService: MonstersStoreService) {}

  select = (monster: Monster) => this.monstersStoreService.selected(monster);

  clear = () => this.monstersStoreService.clear();
}
