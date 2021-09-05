import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product.model";
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class UserService {

  public users: Observable<User[]>;
  private usersSubject: BehaviorSubject<User[]>;

  public user: Observable<User>;
  private userSubject: BehaviorSubject<User>;

  constructor(private cookieService: CookieService, private http: HttpClient) {
    this.usersSubject = new BehaviorSubject<User[]>([{email: "none"}]);
    this.users = this.usersSubject.asObservable();

    this.userSubject = new BehaviorSubject<User>({email: "none"});
    this.user = this.userSubject.asObservable();
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/user/getAll`);
  }

  public deleteUser(userId : string): Observable<User> {
    return this.http.delete<User>(`${environment.apiBaseUrl}/user/${userId}/delete`);
  }

}
