import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FruitType } from '../../shared/model/fruits';

@Component({
  selector: 'app-ngswitch-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ngswitch-demo.component.html',
  styleUrl: './ngswitch-demo.component.css',
})
export class NgswitchDemoComponent { 
  fruitsMap = new Map<FruitType, number>();
  FruitType = FruitType;

  @Input()
  set fruits(list : FruitType[]) {
    list.forEach(fruit => this.addOrUpdate(fruit));
  }

  private addOrUpdate(key: FruitType) {
    if (this.fruitsMap.has(key)) {
      const currentValue = this.fruitsMap.get(key)!;
      this.fruitsMap.set(key, currentValue + 1);
    } else {
      this.fruitsMap.set(key, 1);
    }
  }
}
