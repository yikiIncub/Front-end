import { DialogueServiceService } from '../shared/Services/dialogue-service.service';
import { Component,Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CurrentScreenService } from '../shared/Services/current-screen.service';
import { AuthServiceService } from '../shared/Services/auth-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input() screenCurrent ! :String;

  screenSizeName ! :any;

  isAuth :Boolean=this.authServiec.isLoggedIn;

  isMobile:Boolean=false;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay() 
    );

  constructor(private breakpointObserver: BreakpointObserver,
     private screen: CurrentScreenService, 
     private dialogueService: DialogueServiceService,
     private authServiec:AuthServiceService) {

    this.screen.mycurrentScreenName.subscribe((result) => {
      this.screenSizeName = result
      if (this.screenSizeName === 'XSmall') {
        this.isMobile = true;
      } else {
        this.isMobile = false
      }
    })
  }


  openSingnInDialogue(){
    this.dialogueService.openSignInDialogue()
  }

  openChoixInscription(){
    this.dialogueService.openChoixInscription()
  }
  }






