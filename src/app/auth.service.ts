import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

sendmail(email123:string) {
        const emailid = email123;            
      return  this.http.post('http://localhost:3000/', emailid);
      }

}
