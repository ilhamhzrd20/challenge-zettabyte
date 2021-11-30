import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      civility: [null],
      first_name: [null],
      last_name: [null],
      email: [null],
      user_status: ['pending'],
      company: {
        user_type: ['Mentor'],
        name: ['Company']
      }
    })
  }

  save(): void {
    this.dialogRef.close(this.form.value)
  }

  cancel(): void {
    this.dialogRef.close(false)
  }

}
