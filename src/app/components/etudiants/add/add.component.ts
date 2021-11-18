import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FiliereService } from 'src/app/services/filiere.service';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { UpdateUserService } from 'src/app/services/update-user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

   etudiantform: FormGroup = new FormGroup({});
   submitted = false;
   avatar: any;
   filieres: any[] = [];
   avatarReader: any;

  constructor(
    private fb: FormBuilder,
    private filiereService: FiliereService,
    private etudianrService: EtudiantService,
    private updateUserService: UpdateUserService,
    private messageNotification: MessageNotificationService,

    ) {}

    ngOnInit(): void {

    this.getFiliere();

    this.etudiantform = this.fb.group({
      prenom: ['' , [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nom: ['' , [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['' , Validators.required],
      telephone: ['' , [Validators.required]],
      adresse: ['' , [Validators.required]],
      dateNaiss: ['' , [Validators.required]],
      sexe: ['' , [Validators.required]],
      filiere: ['', [Validators.required]],
      niveau: ['', [Validators.required]],
      nationalite: ['' , Validators.required],
      avatar: ['' , Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.etudiantform.controls; }

  addEtudiant() {
    this.submitted = true;
    this.etudianrService.addEtudiant(this.updateUserService.convertObjetToFormData(this.etudiantform.value,this.avatar)).subscribe(
    (res: any) => {
      if(res) {
        return this.messageNotification.showSuccess(res, 'Inscription');
      }
      else
      {
        return this.messageNotification.showError(res, 'Inscription')
      }
    });

    // stop here if form is invalid
    if (this.etudiantform.invalid) {
      return;
    }
  }

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

  onFileAvatar(event: any) {
    this.avatar = event.target.files[0];
    this.etudiantform.get('avatar')?.setValue(event.target.files[0]);

    if (!event.target.files[0] && event.target.files[0].length === 0) {
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
      const readerAvatar = new FileReader();
      readerAvatar.readAsDataURL(event.target.files[0]);
      readerAvatar.onload = () =>{
        this.avatarReader = readerAvatar.result;
        //show image
        const uploardFile: any = document.getElementById('uploardFile');
        uploardFile.innerHTML = "";
        var img: any = new Image();
        img.src = readerAvatar.result;
        uploardFile.appendChild(img);
        img.className+='uploardFileImage';
      }
  }
  onReset() {
    this.submitted = false;
    this.etudiantform.reset();
  }

}
