import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null,
  };

  public error = null;

  constructor(private jarwis: JarwisService,
              private notify: SnotifyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.notify.info('Wait...', "Cargando");
    this.jarwis.sendPasswordReset(this.form).subscribe(
      data => {
        setTimeout(() => {
          this.notify.clear();
          this.handleResponse(data)
        }, 1000);
      },
      error => {
        setTimeout( () => {
          this.notify.clear();
          this.handleError(error);
        },2000);
      }
    );
  }

  handleResponse(res){
    this.form.email = null;
    return this.notify.success(res.data);
  }

  handleError(error){
    return this.notify.error(error.error.error, "Error");
  }

}
