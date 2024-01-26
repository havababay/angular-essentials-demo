import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipesDemoComponent { 
  currentDate = new Date();
  pi = 3.1415927;
  completion = 0.8512;
  message = 'Hello World';
}
