import {MenuComponent} from '../menu/menu.component';
import {Component, OnInit, Input, forwardRef, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {format} from 'url';
import {Router, ActivatedRoute,NavigationEnd} from '@angular/router';
import {DataObjects} from '.././ObjectGeneric/ObjectGeneric'
import {Util} from '.././ObjectGeneric/Util';
import {Observable} from 'rxjs';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {SeoService} from '../../seo.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  usuario: any;
  login: any;
  logueado:boolean;

  usuarioVacio: any;
  usuarioSesion: any;
  util:any;
  listaConsulta = [];
  
  minDate: {year: 1000, month: 1, day: 1};
  maxDate: {year: 3000, month: 1, day: 1};
  date: any;
  ancla:any;
  URLactual:any;
  ip:any;
  msg:any;

  conectado = false;
  usuarioConectado:any;

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  test: Date = new Date();
  p: number = 1;
  objeto: any;
  objetoRegistro: any;
  lista: any;
  const:any;
  apiUrl = 'http://servidor.globeguides.co';
  apiUrlIp = 'http://ip-api.com/json';

  objetoFiltro:any;

  idModal: any;
  claseModal: any;
  confirmModal: boolean[];
  tituloModal: any;
  cuerpoModal: any;
  ruteModal: any;
  closeModal: boolean[];

  constructor(private seo:SeoService,private http: Http, private router: Router,private route: ActivatedRoute, datasObject: DataObjects, util: Util) {
  	this.idModal = [1,2,3,4,5];
    this.claseModal = ['info', 'success','warning','danger'];
    this.confirmModal = [false];
    this.tituloModal = ['INFORMATION', 'SUCCESS PROCESS', 'WARNING', 'ERROR'];
    this.ruteModal = ['/home', '/blog', '/service', 'single'];
    this.cuerpoModal = ['Loading...','The process was successfully completed', 'XXX',];
    this.closeModal = [false,true];

    this.objeto = datasObject.getData();
    this.msg = datasObject.getProperties(datasObject.getConst().idiomaEn);
	this.const = datasObject.getConst();
    this.usuario = datasObject.getData();
    this.login = datasObject.getData();
	this.usuarioVacio = datasObject.getData();
	this.usuarioSesion = datasObject.getData();
	this.objetoFiltro = datasObject.getData();
	this.objetoRegistro = datasObject.getData();
	this.util = util;
	this.ancla=null;

	router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { 
          		localStorage.setItem('anclaServicio', "#" + tree.fragment);          	
          	$('html, body').animate({ scrollTop: $("#" + tree.fragment).offset().top-100 }, 'slow');
          	 localStorage.setItem('anclaServicio', null);
          }
        }
      }
    });

  }

private fragment: string;
  ngOnInit() {

  	localStorage.setItem('reload','0');

  	if($('#footer')){
         $('#footer').css("display","none");
       }
  	 this.seo.generateTags({
      title: 'Globe guides',  
      description: 'We are GLOBEGUIDES. Your Journey is Our Passion'
     
    });
  	this.obtenerIp();

  	 this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
		$('#drownHome').addClass('active');
		$('#drownBlog').removeClass('active');
		$('#drownServ').removeClass('active');
		$('html, body').scrollTop(0);

		var anchor = localStorage.getItem('anchor');	
				if (anchor == '#Home') {
					$('html, body').scrollTop(0);
					localStorage.removeItem('anchor');
				}else{
					$('html, body').scrollTop(0);
					localStorage.removeItem('anchor');
				}
  	/*Custom script ocultar menu en vista no movil*/
		var browserWidth = this.getBrowserWidth();    //Load Thin CSS Rules
		if (browserWidth > 750){
		  $('#myNavbar .contacto-header').hide();  
		  $('#myNavbar .mobile-info-contact-menu').hide();  
		  $('.unique-hr').hide(); 

		}else{
		    $('#myNavbar .lista-redes-telefono').hide();  
		    $('.navbar-brand').show(); 
		    $('.contact ').after($('#login'));
		}

		this.ancla = localStorage.getItem('anclaServicio');
		if(this.ancla!=null && this.ancla.indexOf('#footer')>=0 && this.ancla.indexOf('null')<0){
		    $('html, body').animate({ scrollTop: $(this.ancla).offset().top-100}, 'slow');
		    localStorage.setItem('anclaServicio', null);
		    return false;
	    }

	    let temp:any =localStorage.getItem('usuarioSesion');
		if(temp!=null){
			this.logueado=true;
		}
		else{
			this.logueado=false;
		}

	this.sendSearch();
  }

  ngDoCheck(){
		this.ancla = localStorage.getItem('anclaServicio');
		if(this.ancla!=null && this.ancla.indexOf('#footer')>=0 && this.ancla.indexOf('null')<0){
		    $('html, body').animate({ scrollTop: $(this.ancla).offset().top-100}, 'slow');
		    localStorage.setItem('anclaServicio', null);
		    return false;
	    }


	    if(localStorage.getItem('usuario')!=null && localStorage.getItem('usuario')!='null'){
	    	this.conectado = true;
	    	this.usuarioConectado = JSON.parse(localStorage.getItem('usuario')).usuario;
	    }
	    else{
	    	this.conectado = false;
	    	this.usuarioConectado = '';
	    }
  }

  bajarSesion(){
  	this.objetoFiltro.usuario = '';
  	this.objetoFiltro.clave = '';
  	localStorage.clear();
  }


  obtenerIp(){
    let objetoIp:any;
    this.getIpCliente().toPromise().then(data => {
      let ip:any = data;
      objetoIp = JSON.stringify(data).split('"');
      this.ip = objetoIp[34].substr(0, objetoIp[34].length - 1);
      /*let temporal:any[]=JSON.stringify(data).split('"');
      this.ip = temporal[6].toString();*/
    }).catch(data => {
    });
  }
  getIpCliente(): Observable<Response> {
    return this.http.get(this.apiUrlIp);
  }

	anclaServicios(ancla){
		localStorage.setItem('anclaServicio', ancla);		

		if(ancla == "#contact"){
		$('html, body').animate({ scrollTop: $(ancla).offset().top-94}, 'slow');	
		}else{
			localStorage.setItem('anchor', ancla);				
		}
	        //localStorage.setItem('anclaServicio', null);
	}


  /*Controlador del form de login y registro de cuentas*/
	mostrarLogin(e){
		$("#formulario_login").delay(100).fadeIn(100);
		$("#formulario_registro").fadeOut(100);
		$('#btn_register_show').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	}

	mostrarRegistro(e){
		console.log(this.usuario);
		$("#formulario_registro").delay(100).fadeIn(100);
		$("#formulario_login").fadeOut(100);
		$('#btn_register_show').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	}

//Funcion para obtener el tamaño de pantalla
	getBrowserWidth(){
		if (window.innerWidth){
	    	return window.innerWidth;
		}  
		else if (document.documentElement && document.documentElement.clientWidth != 0){
	    	return document.documentElement.clientWidth;
	    }
		else if (document.body){
			return document.body.clientWidth;
		}      
	    	return 0;
	}

	sendLogin(){
		this.objetoFiltro.ip = this.ip;
		this.objetoFiltro.token = '';
	    this.objetoFiltro.opcion=1;
	    this.objetoFiltro.path='login';
	    let date = new Date();
	    let dia = date.getDate()<10 ? '0'+date.getDate() : date.getDate();
	    let anio = date.getFullYear();
	    let mes = date.getMonth()+1;
	    let mesTexto = mes<10 ? '0'+mes : mes;
	    let horas = date.getHours()<10 ? '0'+date.getHours() : date.getHours();
	    let minutos = date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes();
	    let segundos = date.getSeconds()<10 ? '0'+date.getSeconds() : date.getSeconds();
	    let tiempo = horas +':'+ minutos +':'+ segundos;
	    this.objetoFiltro.fechaGrabado = anio+'-'+mesTexto+'-'+dia+' '+tiempo;

	    this.logg(this.objetoFiltro)
	    .map((response) => response.json())   //Mapeamos los datos devueltos por nuestro archivo php
	    .subscribe((data) => {                
	      	let temporal = data;
	      	debugger;
	      	if(temporal.length>0){
	        	localStorage.setItem('usuario', JSON.stringify(temporal[0]));
			  	$('.contenedor_modal').css('display','none');
			  	$('#div_contenedor_modal_logIn').css('display','none');
			  	return true;
		    }
	        else{
	        	this.util.ocultarMostrarModal(this.const.idModal.warning, 'The Username or the Password are incorrects ');
		        return true;
	        }
	    });
	}
	logg(item: Object) {
    	return this.http.post(this.apiUrl, item, this.options);
    }

    sendAccess() {
    	this.objetoRegistro.path='acceso';
		this.objetoRegistro.usuario = JSON.parse(localStorage.getItem('usuario')).usuario;
		this.objetoRegistro.ip = this.ip;
		this.objetoRegistro.token = '';
		this.objetoRegistro.swActivoLink = 0;
		this.objetoRegistro.opcion=2;

		this.guardarAcceso(this.objetoRegistro)
			.map((response) => response.json())   //Mapeamos los datos devueltos por nuestro archivo php
			.subscribe((data) => {                
				let temporal = data;
				return true;
		});
	}
	guardarAcceso(item: Object) {
	    return this.http.post(this.apiUrl, item, this.options);
	}

	sendSearch() {
	    let objetoSeleccionado = null;

	    this.objetoFiltro.opcion=1;
	    this.objetoFiltro.path='articulo';
	    this.buscar(this.objetoFiltro)
	    .map((response) => response.json())   //Mapeamos los datos devueltos por nuestro archivo php
	    .subscribe((data) => {                
	      let temporal = data;
	      if('array' == this.tipoDeVariable(temporal)){
	        this.listaConsulta = temporal;
			if(this.listaConsulta.length){
				for (var i = this.listaConsulta.length - 1; i >= 0; i--) {
					this.listaConsulta[i].fechaGrabado = this.listaConsulta[i].fechaGrabado.substring(0,10);
				}
			}

	        return true;
	      }
	    });
    }
    buscar(item: Object) {
    	return this.http.post(this.apiUrl, item, this.options);
    }

	tipoDeVariable(obj) {
		return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}

}
