import { Component, OnInit } from '@angular/core';
import { ImgToBase64Service } from 'src/app/services/img-to-base64.service';
import { SuperviseurService } from 'src/app/services/superviseur.service';

@Component({
  selector: 'app-list-superviseur',
  templateUrl: './list-superviseur.component.html',
  styleUrls: ['./list-superviseur.component.css']
})
export class ListSuperviseurComponent implements OnInit {

  filieres: any;
  etudiants: any = [];
  etudiantsByLevel: any = [];
  etudiantsByFiliereAndLevel: any = [];
  etudiantBloquer: any;
  etudiantDebloquer: any;
  agents: any = [];
  search: any = '';
  driver: any;
  maxSize: any | number;
  directionLinks: any | boolean;
  totalRecords: any;
  page: number = 1;
  superviseurs: any = [];
  constructor(
    private superviseurService: SuperviseurService,
    private fileToBase64: ImgToBase64Service) { }

  ngOnInit(): void {
    this.getSuperviseurs();
  }


  getSuperviseurs()
  {
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
    this.totalRecords = this.superviseurs.length;
    for (let index of this.superviseurs) {
      index.avatar = this.fileToBase64.getFile(index.avatar);
    }
    return this.superviseurs;
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
