import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { UpdateUserService } from 'src/app/services/update-user.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {



   agentform: FormGroup = new FormGroup({});
   submitted = false;
   avatar: any;
   avatarReader: any;

  constructor(
    private fb: FormBuilder,
    private updateUserService: UpdateUserService,
    private agentService: AgentService,
    private messageNotification: MessageNotificationService,

    ) {}

    ngOnInit(): void {
    this.agentform = this.fb.group({
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
  get f() { return this.agentform.controls; }

  addAgent() {
    this.submitted = true;
    this.agentService.addAgent(this.updateUserService.convertObjetToFormData(this.agentform.value,this.avatar)).subscribe(
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
    if (this.agentform.invalid) {
      return;
    }
  }


  onFileAvatar(event: any) {
    this.avatar = event.target.files[0];
    this.agentform.get('avatar')?.setValue(event.target.files[0]);

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
    this.agentform.reset();
  }

}
