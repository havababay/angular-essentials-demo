import { Injectable } from '@angular/core';
import { Person } from '../../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private readonly NEXT_ID_KEY = 'nextId';

  private getNextId() : number {
    let nextIdString = localStorage.getItem(this.NEXT_ID_KEY); 

    return nextIdString ? parseInt(nextIdString) : 0;
  }

  private setNextId(id : number) : void {
    localStorage.setItem(this.NEXT_ID_KEY, id.toString());
  }

  private readonly PERSONS_KEY  = 'persons';

  private getPerons() : Map<number, Person>{
    let personsString = localStorage.getItem(this.PERSONS_KEY);
    let idToPerson = new Map<number, Person>();

    if (personsString) {
      JSON.parse(personsString).forEach((person: Person) => {
        Object.setPrototypeOf(person, Person.prototype);
        idToPerson.set(person.id, person);
      });
    }

    return idToPerson;
  }

  private setPersons(allPersons : Map<number, Person>) : void {
    localStorage.setItem(this.PERSONS_KEY, 
      JSON.stringify(Array.from(allPersons.values())));
  }

  list() : Person[] {
    return Array.from(this.getPerons().values());
  }

  get(id : number) : Person {
    if (!this.getPerons().has(id)) {
      throw new Error("Failed to retrieve person by id: " + id);
    }

    return this.getPerons().get(id)!;
  }

  update(person : Person) {
    let personsMap = this.getPerons();

    if (!personsMap.has(person.id)) {
      throw new Error("Failed to update person by id: " + 
        person.id);
    }

    personsMap.set(person.id, person);
    this.setPersons(personsMap);
  }

  add(person : Person) {
    let newId = this.getNextId();
    let personsMap = this.getPerons();

    person.id = newId;
    personsMap.set(person.id, person);
    this.setPersons(personsMap);
    this.setNextId(++newId);
  }

  delete(id : number) : void {
    let personsMap = this.getPerons();

    if (!personsMap.delete(id)) {
      throw new Error(
        "Failed to delete person by id: " + 
        id);
    }

    this.setPersons(personsMap);

  }
}
