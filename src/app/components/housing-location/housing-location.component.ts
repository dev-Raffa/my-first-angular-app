import { Component, Input } from '@angular/core';
import { HousingLocation } from './interface/housing-location.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './template/housing-location.template.html',
  styleUrl: './style/housing-location.styles.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
