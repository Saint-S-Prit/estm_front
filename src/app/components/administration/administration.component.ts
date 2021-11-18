import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AgentService } from 'src/app/services/agent.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FiliereService } from 'src/app/services/filiere.service';
import { ImgToBase64Service } from 'src/app/services/img-to-base64.service';
import { SuperviseurService } from 'src/app/services/superviseur.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  etudiants: any = [];
  etudiantsByLevel: any = [];
  etudiantsByFiliereAndLevel: any = [];
  etudiantBloquer: any;
  etudiantDebloquer: any;
  agents: any = [];
  search = '';
  driver: any;
  maxSize: any | number;
  directionLinks: any | boolean;
  totalRecords: any;
  page: number = 1;
  superviseurs: any = [];
  filiereform : FormGroup = new FormGroup({});
  filieres: any = [];
  constructor(
    private etudiantService: EtudiantService,
    private agentService: AgentService,
    private superviseurService: SuperviseurService,
    private filiereService: FiliereService,
    private fileToBase64: ImgToBase64Service,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getEtudiant();
    this.getSuperviseurs();
    this.getFiliere();
    this.getAgents();


    this.filiereform = this.fb.group({
      libelle: ['' , [Validators.required]],
    });
  }

  addFiliere()
  {
    console.log(this.filiereform);

    this.filiereService.addFiliere(this.filiereform.value).subscribe(
      (filiere) =>{
        if (filiere) {
          this.filieres = filiere;
          return this.filieres;
        }
      }
    )
  }

  getFiliere()
  {
    this.filiereService.getFilieres().subscribe(
      (filiere) =>{
        if (filiere) {
          this.filieres = filiere;
          return this.filieres
        }
      }
    )
  }

  getSuperviseurs()
  {
    this.superviseurs = [];
    this.superviseurService.getSuperviseurs().subscribe(
    (superviseurActif:any) => {
      let data = superviseurActif;
      data.forEach((element: any) => {
        if(element.isDeleted == false)
        {
          this.superviseurs.push(element)
        }

      });

    });
    this.totalRecords = this.etudiants.length;
    for (let index of this.superviseurs) {
      index.avatar = this.fileToBase64.getFile(index.avatar);
    }
    return this.superviseurs;
  }

  getAgents()
  {
    this.agents = [{}];
    this.agentService.getAgents().subscribe(
    (agent:any) => {
      let data = agent;
      data.forEach((element: any) => {
        if(element.isDeleted == false)
        {
          this.agents.push(element)
        }

      });

    });
    this.totalRecords = this.etudiants.length;
    for (let index of this.superviseurs) {
      index.avatar = this.fileToBase64.getFile(index.avatar);
    }
    return this.superviseurs;
  }

  getEtudiant(niveau?:any , filiere?:any)
  {
    this.etudiants = [{}];

    this.etudiantService.getEtudiants().subscribe(
      (etudiantActif:any) => {

        let data = etudiantActif["hydra:member"];
        if (niveau && filiere) {
          data.forEach((element: any) => {

          if(element.isDeleted == false && element?.niveau == niveau && element?.filiere['libelle'] == filiere)
          {
            this.etudiants.push(element)
          }

        });

        }
        else if (niveau && filiere == null)
        {
          data.forEach((element: any) => {

          if(element.isDeleted == false && element.niveau == niveau)
          {
            this.etudiants.push(element)
          }
        });
        }
        else if (niveau == null && filiere)
        {
          data.forEach((element: any) => {

          if(element.isDeleted == false && element?.filiere['libelle'] == filiere)
          {
            this.etudiants.push(element)
          }
        });
        }
        else
        {
          data.forEach((element: any) => {

          if(element.isDeleted == false)
          {
            this.etudiants.push(element)
          }
        });
        }

    });
    this.totalRecords = this.etudiants.length;
    for (let index of this.etudiants) {
      index.avatar = this.fileToBase64.getFile(index.avatar);
    }
    return this.etudiants;
  }


  listeEtudiantsBloquer()
  {
    this.etudiants = [];
    this.etudiantService.getEtudiants().subscribe(
      (etudiantBloquer: any) => {
        let data = etudiantBloquer["hydra:member"];
          data.forEach((element: any) => {
          if(element.isDeleted == true)
          {
            this.etudiants.push(element)
          }
        });
      }
    )
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



  bloqueEtudiant(argument: any)
  {
    this.etudiantService.bloquerEtudiant(argument).subscribe(
      (data) => {
        this.etudiantBloquer = data;
        return this.getEtudiant();

      });
  }

  debloqueEtudiant(argument: any)
  {
    this.etudiantService.debloquerEtudiant(argument).subscribe(
      (data) => {
        this.etudiantDebloquer = data;
        return this.getEtudiant();
        });
  }
}
