import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';  
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  animal: string;
  name: string;
   selected:any;
  constructor(public dialog: MatDialog) {
   this.selected="login";
  }
  changeMenu(id:string)
  {
    this.selected=id;
    
  }

}
