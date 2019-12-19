import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HeaderState} from './headerState.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabSelected: EventEmitter<HeaderState> = new EventEmitter<HeaderState>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipesClick() {
    this.tabSelected.emit(HeaderState.RECIPES);
  }

  onShoppingClick() {
    this.tabSelected.emit(HeaderState.SHOPPING);
  }
}
