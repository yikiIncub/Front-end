import { Router } from '@angular/router';


import { Component } from '@angular/core';
import { AuthServiceService } from './shared/Services/auth-service.service';
import { CurrentScreenService } from './shared/Services/current-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  isMobile:boolean=false;

  cureentUrl:any;
  a:any;

  isAuthScreen:boolean=false;

  isAuth:Boolean=this.authSevice.isLoggedIn;

  currentScreenSize!:String;
  
  constructor(public screenService:CurrentScreenService,
    private authSevice:AuthServiceService,
    private route:Router){

      this.screenService.mycurrentScreenName.subscribe((result)=>{
        if(result==="XSmall"){
          this.isMobile=true
        }else{
          this.isMobile=false
        } 
      })

     this.route.events.subscribe(
      (result)=>{
        this.a=result;
        if(this.a['url']!=undefined){
          this.cureentUrl=this.a['url']          
        }

        if(this.cureentUrl=='/sign-in' || this.cureentUrl=='/sign-up')
        {
          this.isAuthScreen=true
        }else{
          this.isAuthScreen=false
        }    
      }
      )

}
}
