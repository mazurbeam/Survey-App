import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import 'rxjs/add/operator/switchMap';

import {User} from './../../user'
import {Poll} from './../../poll'
import {UserService} from './../../user.service'
import {PollService} from './../../poll.service'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  poll: Poll
  user: User


  constructor(private user_service: UserService, private poll_service: PollService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap
    .switchMap(params => {
      console.log(params.get('id'));
      return this.poll_service.get_poll(params.get('id'));
  })
  .subscribe(poll => this.poll = poll);

  }

  ngOnInit() {
    this.user_service.check_logged_in()
    .then(data => {
      this.user = data.data
      console.log(this.user)
    })
    .catch(()=> this.router.navigate(['']))

    console.log(this.poll)
  }

  vote(id){
    this.poll_service.vote(id)
  }

}
