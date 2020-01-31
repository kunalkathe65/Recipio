import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  title = 'Recipio';
  loadedFeature = 'recipe';

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
