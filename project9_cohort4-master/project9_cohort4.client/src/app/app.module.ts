import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './batool/home/home.component';
import { NavBarComponent } from './batool/nav-bar/nav-bar.component';
import { GetAllComponent } from './batool/get-all/get-all.component';
import { RouterModule } from '@angular/router';
import { GetByIdComponent } from './batool/get-by-id/get-by-id.component';
import { AddAnimalComponent } from './batool/add-animal/add-animal.component';
import { UpdateInfoComponent } from './batool/update-info/update-info.component';
import { AnimalsComponent } from './Adoptioh/animals/animals.component';
import { AnimalsDetailsComponent } from './Adoptioh/animals-details/animals-details.component'; 
import { AnimalFormComponent } from './Adoptioh/animal-form/animal-form.component';
import { TypeComponent } from './Adoptioh/type/type.component';
import { FooterComponent } from './batool/footer/footer.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AdminAdoptionComponent } from './Admin/admin-adoption/admin-adoption.component';
import { LoginComponent } from './Batoul/login/login.component';
import { RegisterComponent } from './Batoul/register/register.component';
import { AddpostComponent } from './mustafa/addpost/addpost.component';
import { UserProfileComponent } from './Batoul/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    GetAllComponent,
    GetByIdComponent,
    AddAnimalComponent,
    UpdateInfoComponent,
    AnimalsComponent,
    AnimalsDetailsComponent,  
    AnimalFormComponent,
    TypeComponent,
    FooterComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AddpostComponent,
    DashboardComponent,
    UserProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "getAllUsers", component: GetAllComponent },
      { path: "getbyId/:id11", component: GetByIdComponent },
      { path: "addAnimal", component: AddAnimalComponent },
      { path: "UpdateAnimal/:id", component: UpdateInfoComponent }, 
      { path: "animal-details/:id", component: AnimalsDetailsComponent },  
      { path: "animals-form/:animalId", component: AnimalFormComponent }, 
      { path: 'animals', component: AnimalsComponent }, 
      { path: 'animals', component: AnimalsComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },

      { path: 'animals', component: AnimalsComponent },
      { path: 'addpost', component: AddpostComponent }, 
      { path: 'animals', component: AnimalsComponent },
      { path: 'dashboard', component: DashboardComponent },


      { path: 'dashboard',
      component: DashboardComponent,
      children: [
      
        { path: 'AdminAdoption', component: AdminAdoptionComponent },
        { path: '', redirectTo: 'user', pathMatch: 'full' } ,// Redirect to 'stats' as default child
      ]
  }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
