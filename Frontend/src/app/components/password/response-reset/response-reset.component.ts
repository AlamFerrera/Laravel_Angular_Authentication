import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public form = {
    email: null,
    password: null,
    password_confirmation:null,
    resetToken: null
  };

  public error = {
    email : null,
    password: null,
    password_confirm: null
  };

  constructor(private route:ActivatedRoute,
              private jarwis:JarwisService,
              private router:Router,
              private notify:SnotifyService) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token'];
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    let _router = this.router;
    this.notify.confirm('Listo, Inicia sesion con la nueva password',{
        buttons:[
          {
            text: 'Okay',
            action: toster => {
              _router.navigateByUrl('/login'),
              this.notify.remove(toster.id)
            }
          }
        ]
      });

  }

  handleError(error){
    this.error = error.error.errors;
  }


}
