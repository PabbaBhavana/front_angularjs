import { UserlistComponent } from './userlist/userlist.component';
import { Routes,RouterModule } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserdataComponent } from './userdata/userdata.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes:Routes=[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'edituser',component:EdituserComponent},
  {path:'userlist',component:UserlistComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdataComponent,
    EdituserComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
