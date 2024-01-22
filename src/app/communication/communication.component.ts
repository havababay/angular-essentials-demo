import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css',
})
export class CommunicationComponent { 
  @Input()
  title = "Default title";

  @Input("showButton")
  isVisible = true;

  @Output() lightSwitched = new EventEmitter<boolean>();

  onLightChanged(isLightOn : boolean): void {
    this.lightSwitched.emit(isLightOn);
  }
}
