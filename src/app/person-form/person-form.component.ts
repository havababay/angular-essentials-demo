import { PhoneType } from './../../shared/model/phone-type';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../../shared/model/person';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PhoneNumber } from '../../shared/model/phone-number';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, 
    MatIconModule, MatSelectModule
  ],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormComponent { 
  constructor(private personService : PersonService,
    private routerService : Router) {

  }
  @Input()
  stringId? : string;
  currentPerson! : Person;
  isPersonLoaded = false;
  phoneTypeOptions = Object.values(PhoneType);

  ngOnInit(): void {
    try {
      if (this.stringId) {
        let id = parseInt(this.stringId);
        if (this.personService.get(id)) {
          this.currentPerson = this.personService.get(id)!;
        }
      } else {
        this.currentPerson = new Person(0, "","","");
      }
      this.isPersonLoaded = true;
    } catch(error) {
      this.isPersonLoaded = false;
      console.log("Failed to get person", error)
    }
  }

  onSubmitRegistration() {
    console.log("Form submitted!" + JSON.stringify(this.currentPerson));

    if (this.stringId) {
      this.personService.update(this.currentPerson);
    } else {
      this.personService.add(this.currentPerson);
    }

    this.routerService.navigate(["/persons"]);
  }

  addPhoneNumber() {
     this.currentPerson.phones.push(new PhoneNumber("", PhoneType.Mobile));
  }

  @ViewChild('phonesGroup') phonesGroup? : NgModelGroup;

  removePhoneNumber(index : number) {
    this.currentPerson.phones.splice(index, 1);
    this.phonesGroup?.control.markAsDirty();
  }
}
