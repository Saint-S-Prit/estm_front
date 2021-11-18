import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FiliereService } from 'src/app/services/filiere.service';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { UpdateUserService } from 'src/app/services/update-user.service';

@Component({
  selector: 'app-edite-etudiant',
  templateUrl: './edite-etudiant.component.html',
  styleUrls: ['./edite-etudiant.component.css']
})
export class EditeEtudiantComponent implements OnInit {

  constructor(
    private etudiantService: EtudiantService,
    private authService: AuthService,
    private filiereService: FiliereService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private uploardFileService: UpdateUserService,
    private messageNotification : MessageNotificationService,

  ) { }

  submitted = false;
  user: any;
  email: any;
  avatar: any;
  filieres: any[] = [];
  editeEtudiantform: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.route.paramMap.subscribe(
    params => {
        this.email = params.get('email');
        this.getEtudiantbyEmail(this.email);
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.editeEtudiantform.controls; }

  getFiliere()
  {
    this.filiereService.getFilieres().subscribe(
    (filieres:any) => {

      for (const iterator of filieres) {
        if (iterator) {
          this.filieres.push(iterator.libelle);
        }
      }
      return this.filieres;
    });
  }

   public getEtudiantbyEmail(email: any)
    {
      this.authService.getUserByEmail(email).subscribe(
      (user) => {
        this.displayDriver(user);
      });
    }

    public displayDriver(user: any)
    {
      this.submitted = true;
      this.user = user[0];

      console.log('test=>' + this.user);


      this.editeEtudiantform.patchValue({
        prenom: this.user.prenom,
        nom: this.user.nom,
        email: this.user.email,
        telephone: this.user.telephone,
        adresse: this.user.adresse,
        sexe: this.user.sexe,
        ine: this.user.ine,
        filiere: this.user.filiere,
        niveau: this.user.niveau,
        nationalite: this.user.nationalite,
      });

      if (this.avatar) {
        let objectURL = 'data:image/jpeg;base64,' + this.avatar;
        let avatarUser = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        this.avatar = avatarUser;
      }
    }

      onFileAvatar(event: any) {
      this.avatar = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = () =>{
        this.avatar = reader.result;

        //show image
        const uploardFile: any = document.getElementById('uploardFile');
        uploardFile.innerHTML = "";
        var img: any = new Image();
        img.src = reader.result;
        uploardFile.appendChild(img);
        img.className+='uploardFileImage';
      }
    }

  editEtudiant()
  {
    this.etudiantService.updateEtudiant(this.email ,this.uploardFileService.convertObjetToFormData(this.editeEtudiantform.value, this.avatar)).subscribe(
      (res)=>{
      if (res) {
        return this.messageNotification.showSuccess(res, 'Enregistrement')
      }
      else
      {
        return this.messageNotification.showError(res, 'Enregistrement')
      }
    });
  }
}
