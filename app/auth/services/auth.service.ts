import { Injectable }                          from '@angular/core'
import { Http, Headers, RequestOptions }       from '@angular/http';
import { Router }                              from '@angular/router'
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    private _loggedIn = false;
    private _baseUrl: string = 'http://localhost:9080/GestDepoAPI/auth/'

    public redirectUrl: string;

    constructor(
            private _http: Http,
            private _router: Router){
        this._loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email, password) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      localStorage.setItem('auth_token', 'true');
      return true;
      /*
      return this._http.post(
              //this._baseUrl + 'login',
              'http://jsonplaceholder.typicode.com/posts', 
              JSON.stringify({ email, password }), 
              { headers }
          )
          .map(res => res.json())
          .map((res) => {
              if (res.success) {
                  //localStorage.setItem('auth_token', res.auth_token);
                  localStorage.setItem('auth_token', 'true');
                  this._loggedIn = true;
                  if (this.redirectUrl) {
                      this._router.navigate([this.redirectUrl]);
                      this.redirectUrl = null;
                  }
              }

              return res.success;
          });
        */
        /*
        let body = JSON.stringify({ email, password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        var ret =  this._http.post(
                //this._baseUrl,
                'http://jsonplaceholder.typicode.com/posts',
                body,
                options
            ).map(res => res.json());
        */
        /*
        let body = JSON.stringify(email);
        var ret = this._http.post('http://jsonplaceholder.typicode.com/users', body)
			      .map(res => res.json());
        
        return ret;
        */
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this._loggedIn = false;
  }

  isLoggedIn() {
    return this._loggedIn;
  }
}