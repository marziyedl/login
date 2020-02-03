import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppLoginBoxComponent } from './app-login-box/app-login-box.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './fake-backend/fake-backend';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app.routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppLoginBoxComponent,
    SignUpComponent,
    UsersComponent
  ],

  providers: [
   fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
