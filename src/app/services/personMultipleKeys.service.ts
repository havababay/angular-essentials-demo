import { Injectable } from '@angular/core';
import { Person } from '../../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonMultipleKeysService {
  private readonly NEXT_ID_KEY = 'nextId';

  private getNextId() : number {
    let nextIdString = localStorage.getItem(this.NEXT_ID_KEY); 

    return nextIdString ? parseInt(nextIdString) : 0;
  }

  private setNextId(id : number) : void {
    localStorage.setItem(this.NEXT_ID_KEY, id.toString());
  }

  private readonly PERSONS_IDS_KEY  = 'persons_ids';
  private readonly PERSON_KEY  = 'person';

  private getPersonIds() : number[] {
    let personIdsString = localStorage.getItem(this.PERSONS_IDS_KEY);

    if (!personIdsString) {
      return [];
    } else {
      return Array.from(JSON.parse(personIdsString));
    }
  }

  private setPersonIds(allIds : number[]) {
    localStorage.setItem(this.PERSONS_IDS_KEY, 
      JSON.stringify(Array.from(allIds)));
  }

  private getStorageKeyById(id: number): string {
    return this.PERSON_KEY + id;
  }

  list() : Person[] {
    return this.getPersonIds().map(id => this.get(id));
  }

  get(id : number) : Person {
    let personString = localStorage.getItem(this.getStorageKeyById(id));
    if (!personString) {
      throw new Error("Failed to retrieve person by id: " + id);
    }

    let person : Person = JSON.parse(personString);
    Object.setPrototypeOf(person, Person.prototype);
    return person;
  }

  update(person : Person) {
    if (!localStorage.getItem(this.getStorageKeyById(person.id))) {
      throw new Error("Failed to update person by id: " + 
        person.id);
    }

    localStorage.setItem(this.getStorageKeyById(person.id), 
      JSON.stringify(person));
  }

  add(person : Person) {
    let newId = this.getNextId();

    person.id = newId;
    localStorage.setItem(this.getStorageKeyById(newId), JSON.stringify(person));

    let allIds = [...this.getPersonIds(), newId];
    this.setPersonIds(allIds);
    this.setNextId(++newId);
  }

  delete(id : number) : void {
    if (!localStorage.getItem(this.getStorageKeyById(id))) {
      throw new Error("Failed to delete person by id: " + id);
    }

    let deleteIdsList = this.getPersonIds().filter(localStorageId => localStorageId != id);
    this.setPersonIds(deleteIdsList);
    localStorage.removeItem(this.getStorageKeyById(id));
  }
}
