import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './components/administration/administration.component';
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { AgentComponent } from './components/agent/agent.component';
import { ControleSaisiComponent } from './components/agent/controle-saisi/controle-saisi.component';
import { ControleScanneerComponent } from './components/agent/controle-scanneer/controle-scanneer.component';
import { ListAgentComponent } from './components/agent/list-agent/list-agent.component';
import { AddComponent } from './components/etudiants/add/add.component';
import { EditeEtudiantComponent } from './components/etudiants/edite-etudiant/edite-etudiant.component';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';
import { HistoryAndSuiviComponent } from './components/etudiants/history-and-suivi/history-and-suivi.component';
import { ListEtudiantBloquerComponent } from './components/etudiants/list-etudiant-bloquer/list-etudiant-bloquer.component';
import { ListEtudiantComponent } from './components/etudiants/list-etudiant/list-etudiant.component';
import { RecapComponent } from './components/etudiants/recap/recap.component';
import { LoginComponent } from './components/login/login.component';
import { AddSuperviseurComponent } from './components/supervisseur/add-superviseur/add-superviseur.component';
import { ItemMessageRecuComponent } from './components/supervisseur/item-message-recu/item-message-recu.component';
import { ListPayementComponent } from './components/supervisseur/list-payement/list-payement.component';
import { ListSuperviseurComponent } from './components/supervisseur/list-superviseur/list-superviseur.component';
import { MessageRecuComponent } from './components/supervisseur/message-recu/message-recu.component';
import { SupervisseurComponent } from './components/supervisseur/supervisseur.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdministrationComponent, children: [
    {path: 'list-etudiant', component: ListEtudiantComponent},
    {path: 'list-superviseur', component: ListSuperviseurComponent},
    {path: 'list-agent', component: ListAgentComponent},
    {path: 'ajout-agent', component: AddAgentComponent},
    {path: 'ajout-etudiant', component: AddComponent},
    {path: 'ajout-superviseur', component: AddSuperviseurComponent},
    {path: 'etudiant/:email/edit', component: EditeEtudiantComponent},
    {path: 'list-etudiant-bloquer', component: ListEtudiantBloquerComponent}
  ]},
  {path: 'superviseur', component: SupervisseurComponent, children: [
  {path: 'message-recu', component: MessageRecuComponent},
  {path: 'item-message-recu', component: ItemMessageRecuComponent},
  {path: 'list-payement', component: ListPayementComponent},
  ]},
  {path: 'agent', component: AgentComponent, children: [
  {path: 'saisi', component: ControleSaisiComponent},
  {path: 'scanne', component: ControleScanneerComponent},
  ]},
  {path: 'etudiant', component: EtudiantsComponent, children: [
  {path: 'histoy-suivi', component: HistoryAndSuiviComponent},
  {path: 'recap', component: RecapComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
