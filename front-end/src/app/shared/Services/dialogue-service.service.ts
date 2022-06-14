import { SignInComponent } from '../../Auth/sign-in/sign-in.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChoixincriptionComponent } from '../../choixincription/choixincription.component';

@Injectable({
  providedIn: 'root'
})
export class DialogueServiceService {

  constructor(public dialog: MatDialog) { }

  openSignInDialogue() {
    const dialogRef = this.dialog.open(SignInComponent,
      {
        height:'90%',
        width:'80%',
        panelClass: 'full',
        minWidth:'270px',
        minHeight:'auto',
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openChoixInscription() {
    const dialogRef = this.dialog.open(ChoixincriptionComponent,
      {
        height:'80%',
        width:'70%',
        panelClass: 'full',
        minWidth:'350px',
        minHeight:'auto',
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

