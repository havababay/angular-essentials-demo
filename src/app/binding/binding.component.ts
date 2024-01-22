import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent { 
  productName = "strawberry";
  price = 50;
  quantity = 80;
  isDisabled = true;

  getTodayDateAsString(): string {
    const today = new Date();
    return today.toLocaleDateString();
  }

  handleButtonClick(): void {
    console.log('Button clicked!');
  }
}
