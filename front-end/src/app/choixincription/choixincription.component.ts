import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../shared/Services/auth-service.service';

@Component({
  selector: 'app-choixincription',
  templateUrl: './choixincription.component.html',
  styleUrls: ['./choixincription.component.scss']
})
export class ChoixincriptionComponent implements OnInit {

  constructor(private authService:AuthServiceService,
    private route:Router) { }

  ngOnInit(): void {
  }


  type(type:string){
    this.authService.type=type;
    
  }

}
