import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ngif-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ngif-demo.component.html',
  styleUrl: './ngif-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgifDemoComponent { }
