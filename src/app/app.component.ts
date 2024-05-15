import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HousingLocationComponent],
  templateUrl: './app.template.html',
})
export class AppComponent {}
