import { LoggingService } from './../services/logging.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FruitType } from '../../shared/model/fruits';
import { first } from 'rxjs';

@Component({
  selector: 'app-router-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './router-demo.component.html',
  styleUrl: './router-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterDemoComponent { 
  fruits = [FruitType.Apple, FruitType.Banana];
  currentFruit = FruitType.Apple;
  loggingService : LoggingService;

  constructor(loggingService : LoggingService) {
    this.loggingService = loggingService;
  }

  @Input()
  set id(id : number) {
    if ((id >= 0 ) && (id < this.fruits.length)) {
      this.currentFruit = this.fruits[id];
    }

    this.loggingService.log("router param id is " + id);
  }
}
