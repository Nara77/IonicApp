import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserserviceProvider {


  user = {
    firstName: "Test",
  lastName: "Test",
  email: "Test@gmail.com",
   password: "Test"
}
  
results: any;

  constructor(public http: HttpClient) {
    console.log('Hello UserserviceProvider Provider');


  }

  Register() {
    this.http.post("http://localhost:3000/api/IonicUsers", this.user)

    .subscribe(results => {
      this.results = results;
      console.log(this.results)
    });
    console.log(this.user);
  }

}





