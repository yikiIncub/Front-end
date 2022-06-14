import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CurrentScreenService } from 'src/app/shared/Services/current-screen.service';

@Component({
  selector: 'app-sign-up-freelanceur',
  templateUrl: './sign-up-freelanceur.component.html',
  styleUrls: ['./sign-up-freelanceur.component.scss']
})
export class SignUpFreelanceurComponent implements OnInit {
  isMobile:boolean=false;
  screenSizeName ! :string ;

  constructor(private screen:CurrentScreenService){
 
    this.screen.mycurrentScreenName.subscribe((result) => {
      this.screenSizeName = result
      if (this.screenSizeName === 'XSmall') {
        this.isMobile = true;
      } else {
        this.isMobile = false
      }
    })
  }




  ngOnInit(): void {  }

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
