import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MonstersStoreService } from './services/monsters-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'pokemon-library';

  readonly vm$ = combineLatest([this.MonstersStoreService.monsters$]).pipe(map(([monsters]) => ({ monsters })));
  readonly getMonsters$ = this.MonstersStoreService.getMonsters$();

  search = new FormControl('');
  searching$ = this.search.valueChanges.pipe(switchMap((word) => this.MonstersStoreService.getMonsters$(word)));

  constructor(private MonstersStoreService: MonstersStoreService) {}
}
