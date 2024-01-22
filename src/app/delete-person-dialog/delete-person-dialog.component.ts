import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-person-dialog',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatDialogContent, MatDialogActions, MatDialogClose
  ],
  templateUrl: './delete-person-dialog.component.html',
  styleUrl: './delete-person-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeletePersonDialogComponent { 
  constructor(
    public dialogRef: MatDialogRef<DeletePersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public fullName: string) {}
}
