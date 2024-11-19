import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'box-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  arr:string[] = ['a','b','c','b','c','b','c','b','c','b']
}
