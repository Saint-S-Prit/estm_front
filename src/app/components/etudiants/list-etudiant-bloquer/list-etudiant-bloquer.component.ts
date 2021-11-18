import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ImgToBase64Service } from 'src/app/services/img-to-base64.service';

@Component({
  selector: 'app-list-etudiant-bloquer',
  templateUrl: './list-etudiant-bloquer.component.html',
  styleUrls: ['./list-etudiant-bloquer.component.css']
})
export class ListEtudiantBloquerComponent implements OnInit {



  filieres: any;
  etudiantsBloques: any = [];
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
    private fileToBase64: ImgToBase64Service) { }

  ngOnInit(): void {
    this.listeEtudiantsBloquer();
  }





  listeEtudiantsBloquer()
  {
    this.etudiantsBloques = [];
    this.etudiantService.getEtudiants().subscribe(
      (etudiantBloquer: any) => {
        let data = etudiantBloquer["hydra:member"];
          data.forEach((element: any) => {
          if(element.isDeleted == true)
          {
            this.etudiantsBloques.push(element)
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



  // bloqueEtudiant(argument: any)
  // {
  //   console.log('yes');

  //   this.etudiantService.bloquerEtudiant(argument).subscribe(
  //     (data) => {
  //       this.etudiantBloquer = data;
  //       return this.listeEtudiantsBloquer();

  //     });
  // }

  debloqueEtudiant(argument: any)
  {
    this.etudiantService.debloquerEtudiant(argument).subscribe(
      (data) => {
        // this.etudiantDebloquer = data;
        return this.listeEtudiantsBloquer();
        });
  }

}
