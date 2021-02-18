import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
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

  constructor(private monstersStoreService: MonstersStoreService) {}
}
