import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {Poll} from './../../poll'
import {User} from './../../user'
import {UserService} from './../../user.service'
import {PollService} from './../../poll.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  new_poll: Poll
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

    this.new_poll = new Poll
  }


  create(){
    console.log(this.new_poll)
    this.poll_service.create_poll(this.new_poll)
    .then(data=> this.router.navigate(['/dashboard']))
    .catch(err=>console.log(err))


  }
}
