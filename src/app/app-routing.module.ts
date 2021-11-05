import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';

const routes: Routes = [
  { path: '/', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'details/:id', component: DetailPageComponent },
  { path: 'contact/:id', component: ContactPageComponent },
  { path: 'edit/:id', component: EditPageComponent },
  { path: 'my-page', component: MyPageComponent },
  { path: 'create-page', component: CreatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
