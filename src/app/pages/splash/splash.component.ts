import { DialogComponent } from './../../shared/dialog/dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {

  resumeStatus = true;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  // Show's resume on correct password, otherwise shows user error
  showResume(): void {
    this.dialog.open(DialogComponent, {
      disableClose: false,
    }).afterClosed().subscribe(response => {
      if (response) {
        if (response.resumePassword === '') {
          window.open('/assets/resume.pdf');
        } else {
          this._snackBar.open('Wrong Password Entered!', 'Done', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 3000,
            panelClass: ['white-snackbar']
          });
        }
      }
    });
  }
}
