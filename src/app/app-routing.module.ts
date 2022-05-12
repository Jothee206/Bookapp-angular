import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddbookComponent } from './addbook/addbook.component';

import { AuthGuard } from './auth.guard';
import { DisplayBookComponent } from './display-book/display-book.component';

import { HomeComponent } from './home/home.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'listbooks',component:ListbooksComponent},
  {path:'add-book',component:AddbookComponent},
  {path:'updatebook/:id',component:UpdatebookComponent},
  {path:'display-book',component:DisplayBookComponent},
  {path:'add-to-cart',component:AddToCartComponent},
  {path:'listuser',component:ListuserComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'view-user',component:ViewUserComponent, canActivate:[AuthGuard,RoleGuard]},
 {path:'update-user/:id',component:UpdateUserComponent, canActivate:[AuthGuard,RoleGuard]},
  

  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
