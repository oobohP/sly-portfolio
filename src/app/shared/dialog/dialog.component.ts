import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  dialogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,) {

      // creating the form group
      this.dialogForm = this.fb.group({
        resumePassword: ['', Validators.required]
      });

  }

  ngOnInit(): void {

  }

  // onSubmit returns the dialog form value to the parent
  onSubmit(): void {
    this.dialogRef.close(this.dialogForm.value);
  }
}
