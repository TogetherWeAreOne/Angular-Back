import {Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Angular-back';

  login: boolean = false;
  isGoingToIdentification: boolean = false;

  constructor(public authService: AuthService, public router: Router) {
    if(this.authService.getConnectedUserId() !== ""){
      this.login = true
    }
  }

  ngOnInit(): void {}

  Dismiss() {
    let sidebar = document.getElementById('sidebar')!

    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    }
  }

  Collapse() {
    let sidebar = document.getElementById('sidebar')!

    if (!sidebar.classList.contains("active")) {
      sidebar.classList.add("active");
    } else sidebar.classList.remove('active')
  }

  goToRegister(): void {
    this.isGoingToIdentification = true
    this.router.navigateByUrl('/register');
  }

  goToAuth(): void {
    this.isGoingToIdentification = true
    this.router.navigateByUrl('/auth');
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      },
      error => {

      }, () => {
        this.login = false;
        this.router.navigate(['/']);
      });
  }
}
