import { first } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../../shared/model/person';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsDemoComponent implements OnInit{ 
  constructor(private personService : PersonService,
    private routerService : Router) {

  }
  @Input()
  stringId? : string;

  currentPerson! : Person;

  isPersonLoaded = false;

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
}
