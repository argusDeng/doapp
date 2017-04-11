import { Component } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  numberOfGoblins: number;
  progress = 1;
  lastDialogResult: string;
  folders: any= [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];


  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }
  openDialog() {
    const dialogRef = this._dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    });
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }

}
@Component({

  templateUrl: './dialog-overview-example-dialog.html'
})
export class DialogComponent {
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}
}
