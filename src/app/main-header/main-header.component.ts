import { Component, OnInit,Inject  } from '@angular/core';
import { LoginComponent} from '../login/login.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';  
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent  {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      height:'250px',
      data: {name: this.name, animal: this.animal}
    });
  
  }
}
