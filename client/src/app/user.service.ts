import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"

import { User } from "./user"

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(new_user: User){
    return this.http.post("/user_login", new_user)
            .map(data => data.json())
            .toPromise()
  }

  check_logged_in(){
    return this.http.get("/current_user")
            .map(data => data.json())
            .toPromise()
  }


}
