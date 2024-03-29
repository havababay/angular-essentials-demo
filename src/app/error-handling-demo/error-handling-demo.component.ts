import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ErrorHandlingService } from '../services/error-handling.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../shared/model/person';
import { PersonMultipleKeysService } from '../services/personMultipleKeys.service';
import { PersonService } from '../services/person.service';

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
  constructor(private personService : PersonService) {}

  personIndex? : number;
  currentPerson? : Person;
  isPersonNameLoaded = true;

  getPersonDataByIndex() {
    try {
      this.currentPerson = 
        this.personService.get(this.personIndex!);
      this.isPersonNameLoaded = true;
    } catch(error) {
      this.isPersonNameLoaded = false;
    }
  }
}
