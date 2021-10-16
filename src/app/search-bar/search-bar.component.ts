import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  term = ''
  @Output() search = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.term = value;
  }

  onSubmit(event: any) {
    event.preventDefault()
    this.search.emit(this.term)
  }
}
