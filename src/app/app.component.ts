import { Component } from '@angular/core';
import { WikiSearchService } from './wiki-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pages = [];

  constructor(private wikiSearchService: WikiSearchService) {}

  onSearch(term: string) {
    this.wikiSearchService
      .search(term)
      .subscribe((response: any) => (this.pages = response.query.search));
  }
}
