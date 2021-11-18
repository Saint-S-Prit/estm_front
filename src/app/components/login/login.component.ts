import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageNotificationService } from 'src/app/services/message-notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   private role: any;

  formLogin = new FormGroup({
    username: new FormControl('superviseur@gmail.com', Validators.required),
    password: new FormControl('ESTM-2021', Validators.required),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    // private messageNotificationService: MessageNotificationService,
  ) { }

  ngOnInit(): void {
  }

  login()
  {
     this.authService.login(this.formLogin.value).subscribe(
       (result: any)  => {
          if (result) {
            localStorage.setItem('token', result.token);
            this.role = this.authService.getRole(result.token);
            if (this.role[0] == 'ROLE_ADMINISTRATEUR') {
              this.authService.getUserByEmail(this.formLogin.value.username).subscribe(
                (userCurrent) =>{
                  localStorage.setItem('userCurrent', JSON.stringify(userCurrent))
                  this.router.navigate(['admin/list-etudiant']);
                }
              )
            }
            if (this.role[0] == 'ROLE_SUPERVISEUR') {

              this.authService.getUserByEmail(this.formLogin.value.username).subscribe(
                (userCurrent) =>{
                  localStorage.setItem('userCurrent', JSON.stringify(userCurrent))
                  this.router.navigate(['superviseur']);
                }
              )
            }
            if (this.role[0] == 'ROLE_AGENT') {
              this.authService.getUserByEmail(this.formLogin.value.username).subscribe(
                (userCurrent) =>{
                  localStorage.setItem('userCurrent', JSON.stringify(userCurrent))
                  this.router.navigate(['agent']);
                }
              )
            }
            if (this.role[0] == 'ROLE_ETUDIANT') {
              this.authService.getUserByEmail(this.formLogin.value.username).subscribe(
                (userCurrent) =>{
                  localStorage.setItem('userCurrent', JSON.stringify(userCurrent))
                  this.router.navigate(['etudiant/histoy-suivi']);
                }
              )
            }
            else
            {
              console.log('Accès non autorisé');

              // this.messageNotificationService.showSuccess('Accès non autorisé', 'Erreur');

            }
          }
          else
          {
            console.log("erreur");

            // this.messageNotificationService.showSuccess(result, 'Erreur');
          }

        });
  }

}
