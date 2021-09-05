import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {

  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.load()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.load()
  }

  load() {
    this.userService.getAllUsers().subscribe(p => this.users = p);
    console.log(this.users);
  }

  create() {
    //TODO: Implement Create User
  }

  update(user: User) {
    //TODO: Implement Update User
  }

  delete(user: User) {
    //TODO: Implement Delete User
  }
}
