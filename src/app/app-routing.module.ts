import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path:"", 
    component:LoginComponent
  },
  {
    path:"login",
  component: LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children : [
      {
        path:'main',
        component:MainComponent
      },
      {path:'view',
      component:ViewComponent
    },
    {path:'edit',
  component:EditComponent
},
{
  path:"add",
  component:AddComponent
},
{
path:'delete',
component:DeleteComponent
}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
