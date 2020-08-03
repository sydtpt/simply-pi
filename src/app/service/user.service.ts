import { Injectable } from '@angular/core';
import { ServiceModule } from './service.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: ServiceModule,
})
export class UserService {
    constructor(private _auth: AngularFireAuth) {

    }


    public isLoggedIn(): Observable<any> {
      debugger
      return this._auth.authState.pipe(
        map((user: User) => {
          let isLoggedIn = user ? true : false;
          return isLoggedIn;
        })
      );
    }
}