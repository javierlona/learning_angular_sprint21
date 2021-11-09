import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SandboxPageComponent } from './components/sandbox-page/sandbox-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailPageComponent,
    ContactPageComponent,
    MyPageComponent,
    CreatePageComponent,
    EditPageComponent,
    NavbarComponent,
    SandboxPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
