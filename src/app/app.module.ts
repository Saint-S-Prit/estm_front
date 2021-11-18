import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { MoratoirComponent } from './components/etudiants/moratoir/moratoir.component';
import { SupervisseurComponent } from './components/supervisseur/supervisseur.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { AgentComponent } from './components/agent/agent.component';
import { AuthService } from './services/auth.service';
import { MessageNotificationService } from './services/message-notification.service';
import { AuthInterceptorInterceptor } from './interceptor/auth-interceptor.interceptor';
import { FilterPipe } from './pipe/filter.pipe';
import { ImgToBase64Service } from './services/img-to-base64.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReclamationEtudiantsComponent } from './components/etudiants/reclamation-etudiants/reclamation-etudiants.component';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';
import { AddComponent } from './components/etudiants/add/add.component';
import { ToastrModule } from 'ngx-toastr';
import { AddSuperviseurComponent } from './components/supervisseur/add-superviseur/add-superviseur.component';
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { ListSuperviseurComponent } from './components/supervisseur/list-superviseur/list-superviseur.component';
import { ListAgentComponent } from './components/agent/list-agent/list-agent.component';
import { ListEtudiantComponent } from './components/etudiants/list-etudiant/list-etudiant.component';
import { EditeEtudiantComponent } from './components/etudiants/edite-etudiant/edite-etudiant.component';
import { HistoryAndSuiviComponent } from './components/etudiants/history-and-suivi/history-and-suivi.component';
import { RecapComponent } from './components/etudiants/recap/recap.component';
import { ListEtudiantBloquerComponent } from './components/etudiants/list-etudiant-bloquer/list-etudiant-bloquer.component';
import { MessageRecuComponent } from './components/supervisseur/message-recu/message-recu.component';
import { ItemMessageRecuComponent } from './components/supervisseur/item-message-recu/item-message-recu.component';
import { ListPayementComponent } from './components/supervisseur/list-payement/list-payement.component';
import { ControleScanneerComponent } from './components/agent/controle-scanneer/controle-scanneer.component';
import { ControleSaisiComponent } from './components/agent/controle-saisi/controle-saisi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministrationComponent,
    ReclamationEtudiantsComponent,
    MoratoirComponent,
    SupervisseurComponent,
    MoratoirComponent,
    AgentComponent,
    EtudiantsComponent,
    FilterPipe,
    AddComponent,
    AddSuperviseurComponent,
    AddAgentComponent,
    ListSuperviseurComponent,
    ListAgentComponent,
    ListEtudiantComponent,
    EditeEtudiantComponent,
    HistoryAndSuiviComponent,
    RecapComponent,
    ListEtudiantBloquerComponent,
    MessageRecuComponent,
    ItemMessageRecuComponent,
    ListPayementComponent,
    ControleScanneerComponent,
    ControleSaisiComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
        ToastrModule.forRoot()

    ],
  providers: [
    AuthService,
    MessageNotificationService,
    ImgToBase64Service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
