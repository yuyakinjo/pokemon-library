import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MonstersStoreService } from '../../services/monsters-store.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.styl'],
})
export class SearchFormComponent {
  search = new FormControl('');
  searching$ = this.search.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((word) => this.MonstersStoreService.getMonsters$(word))
  );

  constructor(private MonstersStoreService: MonstersStoreService) {}
}
