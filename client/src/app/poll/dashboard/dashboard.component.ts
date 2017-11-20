import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {User} from './../../user'
import {Poll} from './../../poll'
import {UserService} from './../../user.service'
import {PollService} from './../../poll.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  all_polls = Array(Object)
  user = User

  constructor(private user_service: UserService, private poll_service: PollService, private router: Router) { }

  ngOnInit() {
    this.user_service.check_logged_in()
    .then(data => {
      console.log(data)
      this.user = data.data
      console.log(this.user)
    })
    .catch(()=> this.router.navigate(['']))

    this.poll_service.all_polls()
    .then(polls => {
      this.all_polls = polls
      console.log(this.all_polls)
    })
    .catch(err=>console.log(err))


  }

}
