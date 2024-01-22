import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FruitType } from '../../shared/model/fruits';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgswitchDemoComponent } from '../ngswitch-demo/ngswitch-demo.component';

@Component({
  selector: 'app-ngfor-demo',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatSelectModule, NgswitchDemoComponent
  ],
  templateUrl: './ngfor-demo.component.html',
  styleUrl: './ngfor-demo.component.css',
})
export class NgforDemoComponent { 
  fruits = [FruitType.Apple, FruitType.Apple, FruitType.Banana, FruitType.Orange];
  fruitOptions = Object.values(FruitType);

  addFruit(fruit : FruitType) {
    this.fruits.push(fruit);
  }

  deleteFruit(index : number) {
    this.fruits.splice(index, 1);
  }
}
