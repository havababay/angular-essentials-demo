import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FruitType } from '../../shared/model/fruits';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forms-demo-fruits',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './forms-demo-fruits.component.html',
  styleUrl: './forms-demo-fruits.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsDemoFruitsComponent {
  orderName = '';
  email = '';
  fruitOptions = Object.values(FruitType);
  selectedFruit = '';
  amount = 0;
}
