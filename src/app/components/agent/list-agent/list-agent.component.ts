import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { ImgToBase64Service } from 'src/app/services/img-to-base64.service';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.css']
})
export class ListAgentComponent implements OnInit {


  filieres: any;
  etudiants: any = [];
  etudiantsByLevel: any = [];
  etudiantsByFiliereAndLevel: any = [];
  etudiantBloquer: any;
  etudiantDebloquer: any;
  search: any = '';
  driver: any;
  maxSize: any | number;
  directionLinks: any | boolean;
  totalRecords: any;
  page: number = 1;
  agents: any = [];
  constructor(
    private agentService: AgentService,
    private fileToBase64: ImgToBase64Service) { }

  ngOnInit(): void {
    this.getSuperviseurs();
  }


  getSuperviseurs()
  {
    this.agentService.getAgents().subscribe(
    (superviseurActif:any) => {
      let data = superviseurActif;

      data.forEach((element: any) => {
        if(element.isDeleted == false)
        {
          this.agents.push(element)
        }

      });

    });
    this.totalRecords = this.agents.length;
    for (let index of this.agents) {
      index.avatar = this.fileToBase64.getFile(index.avatar);
    }
    return this.agents;
  }



  // getEtudiantNiveau(niveau: any)
  // {
  //   this.etudiantService.getEtudiants().subscribe(
  //     (etudiantActif:any) => {

  //       let data = etudiantActif["hydra:member"];

  //         data.forEach((element: any) => {
  //           if(element.isDeleted == false && element.niveau == niveau)
  //           {
  //             this.etudiantsByLevel.push(element)
  //           }
  //         });

  //       });
  //       this.totalRecords = this.etudiantsByLevel.length;
  //       for (let index of this.etudiantsByLevel) {
  //         index.avatar = this.fileToBase64.getFile(index.avatar);
  //       }
  //       return this.etudiantsByLevel;
  // }

  // getEtudiantsByFiliereAndLevel(filiere: any, niveau: any)
  // {
  //   this.etudiantService.getEtudiants().subscribe(
  //     (etudiantActif:any) => {

  //       let data = etudiantActif["hydra:member"];

  //         data.forEach((element: any) => {

  //           if(element.isDeleted == false && element.niveau == niveau && element.filiere['libelle'] == filiere)
  //           {
  //             this.etudiantsByFiliereAndLevel.push(element)
  //           }
  //         });

  //       });
  //       this.totalRecords = this.etudiantsByFiliereAndLevel.length;
  //       for (let index of this.etudiantsByFiliereAndLevel) {
  //         index.avatar = this.fileToBase64.getFile(index.avatar);
  //       }
  //       return this.etudiantsByFiliereAndLevel;
  // }



  // bloqueEtudiant(argument: any)
  // {
  //   this.etudiantService.bloquerEtudiant(argument).subscribe(
  //     (data) => {
  //       return this.etudiantBloquer = data;
  //       });
  // }

  // debloqueEtudiant(argument: any)
  // {
  //   this.etudiantService.debloquerEtudiant(argument).subscribe(
  //     (data) => {
  //         return this.etudiantDebloquer = data;
  //       });
  // }


}
