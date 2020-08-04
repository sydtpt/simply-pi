import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }


  login() {
    console.log(this.username)
    this.auth.signInWithEmailAndPassword(this.username, this.password)
      .then( userCredentials => {
        console.log(userCredentials);
        debugger
      })
      .catch(error => {
        console.log(error);
        debugger
      })
  }

}
