import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogueServiceService } from './shared/Services/dialogue-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up-client/sign-up.component';
import { PasswordRecoveryComponent } from './Auth/password-recovery/password-recovery.component';
import { ProfilComponent } from './Auth/profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CurrentScreenService } from './shared/Services/current-screen.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ChoixincriptionComponent } from './choixincription/choixincription.component';
import { SignUpFreelanceurComponent } from './Auth/sign-up-freelanceur/sign-up-freelanceur.component';
import { ApiServiceService } from './shared/Services/api-service.service';
import { HomeComponent } from './home/home.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    PasswordRecoveryComponent,
    ProfilComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ChoixincriptionComponent,
    SignUpFreelanceurComponent,
    HomeComponent,
    FormulaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,

    MaterialModule,

  ],
  providers: [
    CurrentScreenService,
    DialogueServiceService,
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
