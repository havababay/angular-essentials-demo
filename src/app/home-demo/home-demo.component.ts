import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-demo',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './home-demo.component.html',
  styleUrl: './home-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDemoComponent { }
