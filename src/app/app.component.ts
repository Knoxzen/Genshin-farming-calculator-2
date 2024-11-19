import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GfcNavbarComponent } from './gfc-navbar/gfc-navbar.component';
import { GfcCharacterComponent } from './gfc-character/gfc-character.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GfcNavbarComponent, GfcCharacterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'genshincraftingcalculator-2.1';
}
