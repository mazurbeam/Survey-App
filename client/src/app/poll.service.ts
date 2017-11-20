import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"

import {Poll} from './poll'

@Injectable()
export class PollService {

  constructor(private http: Http) { }

  all_polls() {
    return this.http.get('/all_polls')
    .map(data => data.json())
    .toPromise()
  }
  create_poll(poll) {
    console.log(poll)
    return this.http.post('/create_poll', poll)
    .map(data => data.json())
    .toPromise()
  }
  get_poll(id){
    return this.http.get(`/get_poll/${id}`)
    .map(data=>data.json())
    .toPromise()
  }
}
