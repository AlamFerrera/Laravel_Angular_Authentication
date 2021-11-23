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

  constructor(private jarwis: JarwisService,
              private notify: SnotifyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.jarwis.sendPasswordReset(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res){
    console.log(res);
    this.form.email = null;
  }

}
