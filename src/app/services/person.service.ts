import { Injectable } from '@angular/core';
import { Person } from '../../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons = new Map<number, Person>();
  nextId = 1;

  list() : Person[] {
    return Array.from(this.persons.values());
  }

  get(id : number) : Person {
    if (!this.persons.has(id)) {
      throw new Error("Failed to retrieve person by id: " + id);
    }

    return this.persons.get(id)!;
  }

  update(person : Person) {
    if (!this.persons.has(person.id)) {
      throw new Error("Failed to update person by id: " + 
        person.id);
    }

    this.persons.set(person.id, person);
  }

  add(person : Person) {
    let newId = this.nextId;
    person.id = newId;
    this.persons.set(newId, person);
    ++ this.nextId;
  }

    delete(id : number) : void {
      if (!this.persons.delete(id)) {
        throw new Error(
          "Failed to delete person by id: " + 
          id);
      }
    }
}
