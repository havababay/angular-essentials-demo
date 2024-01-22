import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ErrorHandlingService } from '../services/error-handling.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-error-handling-demo',
  standalone: true,
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './error-handling-demo.component.html',
  styleUrl: './error-handling-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorHandlingDemoComponent { 
  constructor(private errorHandlingService : ErrorHandlingService) {}

  fruitIndex? : number;
  fruitName = "";
  isFruitNameLoaded = true;

  setFruitNameByIndex() {
    try 
    {
      this.fruitName = this.errorHandlingService.
        getFruitName(this.fruitIndex!);
      this.isFruitNameLoaded = true;
    } catch(error) {
      this.isFruitNameLoaded = false;
    }
  }
}
