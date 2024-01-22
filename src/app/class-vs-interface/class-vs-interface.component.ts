import { Person } from './../../shared/model/person';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PersonImpl } from '../../shared/model/person-impl';

@Component({
  selector: 'app-class-vs-interface',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './class-vs-interface.component.html',
  styleUrl: './class-vs-interface.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassVsInterfaceComponent { 
  @Input()
  currentPerson! : Person;

  print(person : Person) {

  }

  person1 = new PersonImpl("F", "L", "e");

  person2 : Person = {
    firstName: 'F',
    lastName: 'F',
    email: 'e',
    getFullName: function (): string {
      return this.firstName + " " + this.lastName;
    }
  }

  personMaayan = new PersonImpl("Maayan", "A", "email");
}
