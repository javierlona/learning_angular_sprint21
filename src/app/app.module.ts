import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

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
import { ParentExampleComponent } from './components/parent-example/parent-example.component';
import { ChildExampleComponent } from './components/child-example/child-example.component';

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
    SandboxPageComponent,
    ParentExampleComponent,
    ChildExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
