import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {QuillEditorModule} from 'ngx-quill-editor';
import {SeoService} from '../seo.service';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {MenuComponent} from './menu/menu.component';
import {DataObjects} from './ObjectGeneric/ObjectGeneric';
import {Functions} from './ObjectGeneric/Functions';
import {Util} from './ObjectGeneric/Util';
import {LoginGuard} from './login.guard';
import {SelectModule} from 'ng-select';
import {ResetPassGuard} from './resetPass.guard';
import {ModalNotificationsComponent} from './modalNotifications/modalNotifications.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {DropZoneComponent} from './dropZone/dropZone.component';
import {DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG} from 'ngx-dropzone-wrapper';
import {IpsResetPassComponent} from './ipsResetPass/ipsResetPass.component';
import {ServComponent} from './serv/serv.component';
import {RegisterComponent} from './register/register.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {UsuarioEditMttoComponent} from './usuarioMtto/usuarioEditMtto.component';
import {UsuarioQueryMttoComponent} from './usuarioMtto/usuarioQueryMtto.component';
import {UsuarioRegistroMttoComponent} from './usuarioMtto/usuarioRegistroMtto.component';
import {ProfileComponent} from './profile/profile.component';
import {PerfilesXUsuarioQueryMttoComponent} from './perfilesXUsuarioMtto/perfilesXUsuarioQueryMtto.component';
import {PerfilesXUsuarioEditMttoComponent} from './perfilesXUsuarioMtto/perfilesXUsuarioEditMtto.component';
import {PerfilQueryMttoComponent} from './perfilesMtto/perfilQueryMtto.component';
import {PerfilEditMttoComponent} from './perfilesMtto/perfilEditMtto.component';
import {ConsultamttoComponent} from './consultaMtto/consultamtto.component';
import {IteradorMttoComponent} from './iteradorMtto/iteradormtto.component';
import {SingleComponent} from './single/single.component';
import {UserRegisterComponent} from './userRegister/userRegister.component';
import {SendEmailsMttoComponent} from './sendEmails/sendEmailsMtto.component';
import {CategoriaQueryMttoComponent} from './categoriaMtto/categoriaQueryMtto.component';
import {CategoriaEditMttoComponent} from './categoriaMtto/categoriaEditMtto.component';
import {ArticuloQueryMttoComponent} from './articuloMtto/articuloQueryMtto.component';
import {ArticuloEditMttoComponent} from './articuloMtto/articuloEditMtto.component';

import {
  RECAPTCHA_LANGUAGE,
  RecaptchaLoaderService,
} from 'ng-recaptcha';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  //url: 'https://httpbin.org/post',
  url: 'http://localhost:8080/RestR/apiRest/restServices/urlUpdateImageProfile',
  acceptedFiles: '.txt',
  headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, PUT, UPDATE, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With', },
  createImageThumbnails: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    ModalNotificationsComponent,
    ModalNotificationsComponent,
    DropZoneComponent,
    IpsResetPassComponent,
    ServComponent,
    BlogComponent,
    ContactComponent,
    RegisterComponent,
    UsuarioEditMttoComponent,
    UsuarioQueryMttoComponent,
    PerfilesXUsuarioQueryMttoComponent,
    PerfilesXUsuarioEditMttoComponent,
    PerfilQueryMttoComponent,
    PerfilEditMttoComponent,
    ProfileComponent,
    ConsultamttoComponent,
    IteradorMttoComponent,
    SingleComponent,
    UserRegisterComponent,
    SendEmailsMttoComponent,
    CategoriaQueryMttoComponent,
    CategoriaEditMttoComponent,
    ArticuloQueryMttoComponent,
    ArticuloEditMttoComponent,
    UsuarioRegistroMttoComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    SelectModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    DropzoneModule.forRoot(DEFAULT_DROPZONE_CONFIG),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    QuillEditorModule
  ],
  providers: [SeoService,DataObjects, LoginGuard, ResetPassGuard, Util, Functions, {
    provide: RECAPTCHA_LANGUAGE,
    useValue: 'es',
  },],
  bootstrap: [AppComponent]
})
export class AppModule {}