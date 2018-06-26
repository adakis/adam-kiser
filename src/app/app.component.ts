import { Component } from '@angular/core';
import { routerTransition } from './components/app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ routerTransition ],
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
