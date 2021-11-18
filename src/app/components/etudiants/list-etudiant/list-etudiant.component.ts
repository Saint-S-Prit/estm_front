import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FiliereService } from 'src/app/services/filiere.service';
import { ImgToBase64Service } from 'src/app/services/img-to-base64.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {


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
  superviseur: any = [];
  constructor(
    private etudiantService: EtudiantService,
    private filiereService: FiliereService,
    private fileToBase64: ImgToBase64Service) { }

  ngOnInit(): void {
    this.getEtudiant();
    this.getFiliere();
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

  getEtudiant(niveau?:any , filiere?:any)
  {
    this.etudiantService.getEtudiants().subscribe(
      (etudiantActif:any) => {
    this.etudiants = [];
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
    console.log('yes');

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
