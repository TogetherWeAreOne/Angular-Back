import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AuthComponent} from './component/auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {RegisterComponent} from './component/register/register.component';
import {GlobalHttpInterceptor} from "./interceptor/global-http-interceptor.service";
import {HomeComponent} from './component/home/home.component';
import {CommonModule, registerLocaleData} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeFr from '@angular/common/locales/fr';

import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ProductsComponent } from './component/products/products.component';
import { AuctionSalesComponent } from './component/auction-sales/auction-sales.component';
import { EventsComponent } from './component/events/events.component';
import { UsersComponent } from './component/users/users.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CreateAuctionSaleComponent } from './component/auction-sales/create-auction-sale/create-auction-sale.component';
import { EditAuctionSaleComponent } from './component/auction-sales/edit-auction-sale/edit-auction-sale.component';
import { CreateProductComponent } from './component/products/create-product/create-product.component';
import { EditProductComponent } from './component/products/edit-product/edit-product.component';
import { CreateEventComponent } from './component/events/create-event/create-event.component';
import { EditEventComponent } from './component/events/edit-event/edit-event.component';
import { CreateUserComponent } from './component/users/create-user/create-user.component';
import { EditUserComponent } from './component/users/edit-user/edit-user.component';


registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [

  {path: "", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "auction-sales", component: AuctionSalesComponent},
  {path: "events", component: EventsComponent},
  {path: "users", component: UsersComponent},
  {path: "auth", component: AuthComponent},

  {path: "create-product", component: CreateProductComponent},
  {path: "edit-product/:id", component: EditProductComponent},
  {path: "create-sale", component: CreateAuctionSaleComponent},
  {path: "edit-sale/:id", component: EditAuctionSaleComponent},
  {path: "create-event", component: CreateEventComponent},
  {path: "edit-event/:id", component: EditEventComponent},
  {path: "create-user", component: CreateUserComponent},
  {path: "edit-user/:id", component: EditUserComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    AuctionSalesComponent,
    EventsComponent,
    UsersComponent,
    AppComponent,
    AuthComponent,
    RegisterComponent,
    HomeComponent,
    CreateAuctionSaleComponent,
    EditAuctionSaleComponent,
    CreateProductComponent,
    EditProductComponent,
    CreateEventComponent,
    EditEventComponent,
    CreateUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
