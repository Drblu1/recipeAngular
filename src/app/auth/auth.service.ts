import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjYuMH1E_g4Ak6SNelUQDClcnRTjqb9LE',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(err => {
      let errorMessage = 'An unknown error occured';
      if (!err.error || !err.error.error) {
        return throwError(errorMessage);
      }
      switch (err.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exist';
      }
      return throwError(errorMessage);
    }));
  }
}
