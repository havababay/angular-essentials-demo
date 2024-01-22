import { Injectable } from '@angular/core';
import { FruitType } from '../../shared/model/fruits';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  private fruits = [FruitType.Orange, 
    FruitType.Apple, 
    FruitType.Banana, 
    FruitType.Apple];

  constructor() { }

  getFruitName(index : number) : string {
    if (index < 0 || index >= this.fruits.length) {
      throw new Error("Invalid fruit index " + index);
    }

    let fruit = this.fruits[index];
    return fruit.toUpperCase();
  }
}
