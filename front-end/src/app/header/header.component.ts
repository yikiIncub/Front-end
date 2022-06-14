import { Component, OnInit } from '@angular/core';
import { CurrentScreenService } from '../shared/Services/current-screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobile:boolean=false;

  constructor(private screenSize:CurrentScreenService) 
  {
    this.screenSize.mycurrentScreenName.subscribe((result)=>{
      if(result==="XSmall"){
        this.isMobile=true
      }else{
        this.isMobile=false
      }
    })
   }

  ngOnInit(): void {
  }

}
