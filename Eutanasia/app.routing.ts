import {NgModule} from '@angular/core';
import {CommonModule, } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginGuard} from './login.guard';
import {ResetPassGuard} from './resetPass.guard';
import {MenuComponent} from './menu/menu.component';
import {IpsResetPassComponent} from './ipsResetPass/ipsResetPass.component';
import {ServComponent} from './serv/serv.component';
import {BlogComponent} from './blog/blog.component';
import {UsuarioEditMttoComponent} from './usuarioMtto/usuarioEditMtto.component';
import {UsuarioQueryMttoComponent} from './usuarioMtto/usuarioQueryMtto.component';
import {UsuarioRegistroMttoComponent} from './usuarioMtto/usuarioRegistroMtto.component';
import {PerfilesXUsuarioQueryMttoComponent} from './perfilesXUsuarioMtto/perfilesXUsuarioQueryMtto.component';
import {PerfilesXUsuarioEditMttoComponent} from './perfilesXUsuarioMtto/perfilesXUsuarioEditMtto.component';
import {PerfilQueryMttoComponent} from './perfilesMtto/perfilQueryMtto.component';
import {PerfilEditMttoComponent} from './perfilesMtto/perfilEditMtto.component';
import {ProfileComponent} from './profile/profile.component';
import {SingleComponent} from './single/single.component';
import {UserRegisterComponent} from './userRegister/userRegister.component';
import {SendEmailsMttoComponent} from './sendEmails/sendEmailsMtto.component';
import {CategoriaQueryMttoComponent} from './categoriaMtto/categoriaQueryMtto.component';
import {CategoriaEditMttoComponent} from './categoriaMtto/categoriaEditMtto.component';
import {ArticuloQueryMttoComponent} from './articuloMtto/articuloQueryMtto.component';
import {ArticuloEditMttoComponent} from './articuloMtto/articuloEditMtto.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'serv', component: ServComponent, canActivate: [LoginGuard]},
  {path: 'blog', component: BlogComponent, canActivate: [LoginGuard]},
  {path: 'menu', component: MenuComponent, canActivate: [LoginGuard]},
  {path: 'perfil', component: ProfileComponent, canActivate: [LoginGuard]},
  {path: 'resetPass', component: IpsResetPassComponent, canActivate: [ResetPassGuard]},
  {path: 'usuarioQueryMtto', component: UsuarioQueryMttoComponent, canActivate: [LoginGuard]},
  {path: 'usuarioEditMtto', component: UsuarioEditMttoComponent, canActivate: [LoginGuard]},
  {path: 'usuarioRegistroMtto', component: UsuarioRegistroMttoComponent, canActivate: [LoginGuard]},
  {path: 'perfilesXUsuarioQueryMtto', component: PerfilesXUsuarioQueryMttoComponent, canActivate: [LoginGuard]},
  {path: 'perfilesXUsuarioEditMtto', component: PerfilesXUsuarioEditMttoComponent, canActivate: [LoginGuard]},
  {path: 'perfilQueryMtto', component: PerfilQueryMttoComponent, canActivate: [LoginGuard]},
  {path: 'perfilEditMtto', component: PerfilEditMttoComponent, canActivate: [LoginGuard]},
  {path: 'single', component: SingleComponent, canActivate: [LoginGuard]},
  {path: 'userRegister', component: UserRegisterComponent, canActivate: [LoginGuard]},
  {path: 'sendEmails', component: SendEmailsMttoComponent, canActivate: [LoginGuard]},
  {path: 'categoriaQueryMtto', component: CategoriaQueryMttoComponent, canActivate: [LoginGuard]},
  {path: 'categoriaEditMtto', component: CategoriaEditMttoComponent, canActivate: [LoginGuard]},
  {path: 'articuloQueryMtto', component: ArticuloQueryMttoComponent, canActivate: [LoginGuard]},
  {path: 'articuloEditMtto', component: ArticuloEditMttoComponent, canActivate: [LoginGuard]},
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule {}
