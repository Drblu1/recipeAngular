import {Component} from '@angular/core';
import {HeaderState} from './header/headerState.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private headerTab: HeaderState = HeaderState.RECIPES;

  onNavigate(headerTab: HeaderState) {
    this.headerTab = headerTab;
  }
}
