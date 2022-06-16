import { CurrentScreenService } from '../../shared/Services/current-screen.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/app/shared/Services/api-service.service';
import { AuthServiceService } from 'src/app/shared/Services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isMobile: boolean = false;
  screenSizeName !: string;
  formgroup !: FormGroup;
  motDepasseMatch: boolean = true;

  constructor(private screen: CurrentScreenService,
    private http: HttpClient,
    private api: ApiServiceService,
    private authService: AuthServiceService) {
    this.screen.mycurrentScreenName.subscribe((result) => {
      this.screenSizeName = result
      if (this.screenSizeName === 'XSmall') {
        this.isMobile = true;
      } else {
        this.isMobile = false
      }
    })
  }

  formdata = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
  });


  ngOnInit(): void { }

  hide = true;

  submit() {
    console.log("Submit est cliquer");
    let data = this.formdata.value;
    return this.http.post(`${this.api._baseurl}` + '/register',
      {
        name: data['name'],
        prenom: data['prenom'],
        email: data['email'],
        type: this.authService.type,
        password: data['password'],
        password_confirmation: data['password_confirmation']
      }).subscribe(
        (result) => {
          console.log("Le resultat est : "+result);
        })
  }

}
