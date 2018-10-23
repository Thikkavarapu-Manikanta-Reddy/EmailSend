import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = '';
  loggedin: boolean = false;
  constructor(private auth:AuthService)
  {
  }
  login()
  {
  	this.auth.sendmail(this.email).subscribe((data) => {
            if (data) {
              console.log('mail sent');
              }
         });;
  }

}
