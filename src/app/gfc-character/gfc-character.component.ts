import { Component } from '@angular/core';
import { GridComponent } from "../grid-component/grid.component";

@Component({
  selector: 'app-gfc-character',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './gfc-character.component.html',
  styleUrl: './gfc-character.component.scss'
})
export class GfcCharacterComponent {

}
