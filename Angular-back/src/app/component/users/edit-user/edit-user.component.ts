import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {Product} from "../../../models/product.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user!: User
  updateProductForm!: FormGroup;

  constructor(private activatedRoute:ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser(this.activatedRoute.snapshot.paramMap.get("id")!).subscribe(user => {
      this.user = user
    });
  }

  onSubmit() {

  }
}
