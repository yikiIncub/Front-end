import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/shared/Services/api-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,
    private http:HttpClient,
    private api:ApiServiceService,) { }

  formgroup !: FormGroup;

  ngOnInit(): void {}

  formdata = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  hide=true

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMotDepasse(){
    if(this.password.hasError("requiredPattern")){
      return 'Le mot de passe est obligatoire'
    }
    return this.password.hasError('errorcode')
  }


  onSubmit(){
    let data=this.formdata.value;

    this._snackBar.open("Etat","Connexion reussie",
    {
       duration:1000,
       panelClass:'green-snackbar',
    });

   return this.http.post(`${this.api._baseurl}`+'/login',
    {
    email:data['email'],
    password:data['password']
    }
    ).subscribe((result:any)=>{

     // localStorage.setItem('access_token',result['access_token'])

      
 //    console.log(localStorage.getItem('access_token'));
    
    })
    
  }



  

  

}
