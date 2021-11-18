import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SuperviseurService } from 'src/app/services/superviseur.service';
import { UpdateUserService } from 'src/app/services/update-user.service';

@Component({
  selector: 'app-add-superviseur',
  templateUrl: './add-superviseur.component.html',
  styleUrls: ['./add-superviseur.component.css']
})
export class AddSuperviseurComponent implements OnInit {


   superviseurform: FormGroup = new FormGroup({});
   submitted = false;
   avatar: any;
   avatarReader: any;

  constructor(
    private fb: FormBuilder,
    private updateUserService: UpdateUserService,
    private superviseurService: SuperviseurService,
    private messageNotification: MessageNotificationService,

    ) {}

    ngOnInit(): void {
    this.superviseurform = this.fb.group({
      prenom: ['' , [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nom: ['' , [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['' , Validators.required],
      telephone: ['' , [Validators.required]],
      adresse: ['' , [Validators.required]],
      sexe: ['' , [Validators.required]],
      avatar: ['' , Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.superviseurform.controls; }

  addSuperviseur() {
    this.submitted = true;
    this.superviseurService.addSuperviseur(this.updateUserService.convertObjetToFormData(this.superviseurform.value,this.avatar)).subscribe(
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
    if (this.superviseurform.invalid) {
      return;
    }
  }


  onFileAvatar(event: any) {
    this.avatar = event.target.files[0];
    this.superviseurform.get('avatar')?.setValue(event.target.files[0]);

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
    this.superviseurform.reset();
  }
}
