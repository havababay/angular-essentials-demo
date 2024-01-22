import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../../shared/model/person';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeletePersonDialogComponent } from '../delete-person-dialog/delete-person-dialog.component';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    CommonModule, MatTableModule, MatButtonModule, MatIconModule, RouterModule
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent implements OnInit{ 
  allPersons : Person[] = [];
  displayedColumns: string[] =
    ['fullName','email', 'actions'];

  constructor(private personService : PersonService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.allPersons = this.personService.list();
  }

  deletePerson(id:number,fullName:string){
    console.log("Delete person: " + id + " " + fullName)

    const dialogRef = this.dialog.open(DeletePersonDialogComponent,{data: fullName,});
    
    dialogRef.afterClosed().subscribe(deletionConfirmed => {
      if(deletionConfirmed){
        this.personService.delete(id)
        this.allPersons=this.personService.list()
        }
    });
  }
 
}
