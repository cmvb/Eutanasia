import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Functions } from '.././components/Functions';
import { DataObjects } from '.././components/ObjectGeneric';

declare var $: any;

export var objs: any;

@Injectable()
export class Util {
  ex: any;
  msg: any;
  mensaje: any;
  const: any;
  enums: any;
  modeloTablas: any;
  func: any;
  usuarioEjemplo: any;

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, dataObject: DataObjects, dataFunctions: Functions) {
    this.ex = dataObject.getDataException();
    this.usuarioEjemplo = dataObject.getDataUsuario();
    this.mensaje = dataObject.getDataMessage();
    this.const = dataObject.getConst();
    this.msg = dataObject.getProperties(this.const.idiomaEs);
    this.func = dataFunctions;
    this.enums = dataObject.getEnumerados();
    this.modeloTablas = dataObject.getDataModeloTablas();
  }

  limpiarExcepcion() {
    console.clear;
    return this.ex;
  }

  actualizarLista(listaRemover, listaActualizar) {
    if (listaRemover.length <= 0) {
      return listaActualizar;
    }
    let nuevaLista = [];
    let lista = listaRemover;
    listaActualizar.forEach(function (element, index) {
      if (listaRemover.indexOf(index) < 0) {
        nuevaLista.push(element);
      }
    })
    return nuevaLista;
  }

  llenarListaRemover(listaRemover, indiceLista) {
    let p = listaRemover.indexOf(indiceLista)
    if (p < 0) {
      listaRemover.push(indiceLista);
    } else {
      delete listaRemover[p];
    }
  }

  readOnlyXphase(listaPhases) {
    if (listaPhases == null || listaPhases.length <= 0) {
      return false;
    }
    for (let item in listaPhases) {
      if (listaPhases[item].toString().toUpperCase() == JSON.parse(localStorage.getItem('phase').toString().toUpperCase())) {
        return true;
      }
    }
    return false;
  }

  readOnlyXpermiso(accion) {

    return false;
  }

  visebleXphase(listaPhases) {
    if (listaPhases == null || listaPhases.length <= 0) {
      return false;
    }
    for (let item in listaPhases) {
      if (listaPhases[item].toString().toUpperCase() == JSON.parse(localStorage.getItem('phase').toString().toUpperCase())) {
        return true;
      }
    }
    return false;
  }

  limpiarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    console.clear();
    return true;
  }

  limpiarSesionXItem(listaItems) {
    if (listaItems == null || listaItems.length <= 0) {
      return false;
    }
    for (let item in listaItems) {
      localStorage.setItem(listaItems[item], null);
    }
    return true;
  }

  // Subir variables a la sesión
  agregarSesionXItem(listaItems) {
    if (listaItems == null || listaItems.length <= 0) {
      return false;
    }
    listaItems.forEach(function (element, index) {
      localStorage.setItem(element.item, JSON.stringify(element.valor));
    });
    return true;
  }

  //limpiar las variables en sesion
  limpiarVariableSesion() {
    let sesion = JSON.parse(localStorage.getItem("usuarioSesion"));
    localStorage.clear();
    localStorage.setItem("usuarioSesion", JSON.stringify(sesion));

    return true;
  }

  // Bajar variables a la sesión
  getSesionXItem(item) {
    if (item == null) {
      return null;
    }

    let temp = localStorage.getItem(item);
    return JSON.parse(temp);
  }

  getEnum(enumerado) {
    if (enumerado == this.enums.sino.cod) {
      return this.enums.sino.valores;
    }
    else if (enumerado == this.enums.sexo.cod) {
      return this.enums.sexo.valores;
    }
    else if (enumerado == this.enums.tipoUsuario.cod) {
      return this.enums.tipoUsuario.valores;
    }
    else if (enumerado == this.enums.tipoDocumento.cod) {
      return this.enums.tipoDocumento.valores;
    }

    else if (enumerado == null) {
      return false;
    }
    return false;
  }

  getEnumValString(array) {
    let lis = [];
    for (let ind in array) {
      let obj = { value: 0, label: '' };
      obj.value = array[ind].value.toString();
      obj.label = array[ind].label;
      lis.push(obj);
    }
    return lis;
  }

  getEmunName(enumerado, id) {
    let name = '';
    enumerado.forEach(function (obj) {
      if (obj.value == id) {
        name = obj.label;
      }
    })
    return name;
  }

  getValorEnumerado(enumerado, id) {
    let valor = { value: 0, label: '' };

    for (var key in enumerado) {
      let obj = enumerado[key];
      if (obj.value == id) {
        valor = enumerado[key];
        break;
      }
    }

    return valor;
  }

  validaciones(objeto, path) {
    let flag = true;
    let texto = '';

    if (path == 'usuario') {
      if (objeto.nombre.toString().length <= 0) {
        flag = false;
        texto = texto + '[First Name] ';
      }
      if (objeto.apellido.toString().length <= 0) {
        flag = false;
        texto = texto + '[Last Name] ';
      }
      if (objeto.usuario.toString().length <= 0) {
        flag = false;
        texto = texto + '[User] ';
      }
      if (objeto.email.toString().length <= 0) {
        flag = false;
        texto = texto + '[Email] ';
      }

      if (objeto.swAdministrador.toString().length <= 0) {
        flag = false;
        texto = texto + '[Admin] ';
      }
      if (objeto.swActivo.toString().length <= 0) {
        flag = false;
        texto = texto + '[Active] ';
      }
      if (objeto.estado.toString().length <= 0) {
        flag = false;
        texto = texto + '[State] ';
      }
      if (objeto.rol.toString().length <= 0) {
        flag = false;
        texto = texto + '[Role] ';
      }
    }
    else if (path == 'articulo') {
      if (objeto.titulo.toString().length <= 0) {
        flag = false;
        texto = texto + '[Title] ';
      }
      if (objeto.resumen.toString().length <= 0) {
        flag = false;
        texto = texto + '[Summary] ';
      }
      if (objeto.autor.toString().length <= 0) {
        flag = false;
        texto = texto + '[Author] ';
      }
      if (objeto.tags.toString().length <= 0) {
        flag = false;
        texto = texto + '[Tags] ';
      }
      if (typeof objeto.date != 'undefined') {
        if (objeto.date.toString().length <= 0) {
          flag = false;
          texto = texto + '[Date] ';
        }
      }
      else {
        flag = false;
        texto = texto + '[Date] ';
      }
      if (typeof objeto.time != 'undefined') {
        if (objeto.time.toString().length <= 0) {
          flag = false;
          texto = texto + '[Time] ';
        }
      }
      else {
        flag = false;
        texto = texto + '[Time] ';
      }
    }
    else if (path == 'categoria') {
      if (objeto.descripcion.toString().length <= 0) {
        flag = false;
        texto = texto + '[Description] ';
      }
    }
    else if (path == 'personal') {
      if (objeto.nombre.toString().length <= 0) {
        flag = false;
        texto = texto + '[First Name] ';
      }
      if (objeto.apellido.toString().length <= 0) {
        flag = false;
        texto = texto + '[Last Name] ';
      }
      if (objeto.clave.toString().length <= 0) {
        flag = false;
        texto = texto + '[Password] ';
      }
      if (objeto.email.toString().length <= 0) {
        flag = false;
        texto = texto + '[Email] ';
      }
    }

    if (!flag) {
      texto = texto + '-> Empty Values.';
      this.ocultarMostrarModal(this.const.idModal.warning, texto);
    }

    return flag;
  }

  //mostrar o ocultar un modal
  ocultarMostrarModal(idModal, cuerpoModal) {
    if (cuerpoModal != null) {
      this.cambiarTextoModal(idModal, cuerpoModal)
    }
    this.classToggleModalParam(idModal);
  }
  classToggleModal(idModal) {
    $('#' + idModal).toggleClass('show');
    $('#' + idModal).toggleClass('modalVisible');
  }
  classToggleModalParam(id) {
    $('#' + id).toggleClass('show');
    $('#' + id).toggleClass('modalVisible');
    return true;
  }
  tipoDeVariable(obj) {
    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
  }
  cambiarTextoModal(idModal, cuerpoModal) {
    $('#' + idModal + ' .replc').html(function (buscayreemplaza, reemplaza) {
      return reemplaza.replace('XXX', cuerpoModal);
    });
  }

  clonarObj(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    var temp = obj.constructor();
    for (var key in obj) {
      temp[key] = this.clonarObj(obj[key]);
    }

    return temp;
  }

  abrirNav(event) {
    let element = $(event.target);
    while (element.get(0).tagName.toString().toUpperCase() !== 'LI') {
      element = $(element).parent();
    }
    element.toggleClass('open');
  }

  abrirDropMenu(event) {
    let element = $(event.target);
    let isOpened = element.get(0).getAttribute('aria-expanded');
    if (isOpened === 'true') {
      element.get(0).setAttribute('aria-expanded', false);
    }
    else {
      element.get(0).setAttribute('aria-expanded', true);
    }
    $(element).parent().toggleClass('open');
  }

  abrirDropButton(event) {
    debugger;
    let element = $(event.target);

    while (element.get(0).tagName.toString().toUpperCase() !== 'BUTTON') {
      element = $(element).parent();
    }
    let isOpened = element.get(0).getAttribute('aria-expanded');
    if (isOpened === 'true') {
      element.get(0).setAttribute('aria-expanded', false);
    }
    else {
      element.get(0).setAttribute('aria-expanded', true);
    }
    element.parent().toggleClass('open');
  }

  getUrlActual() {
    let url = window.location.href.toString();
    return url.split('4200')[1];
  }

  showPopUpById(id) {
    $('#' + id).fadeIn();
    $('#' + id).toggleClass('in');
    $('body').append($('<div>', { class: 'modal-backdrop fade in' }));
  }

  hidePopUpById(id) {
    $('#' + id).fadeOut();
    $('#' + id).toggleClass('in');
    $('.modal-backdrop').remove();
  }

  // Función que arma el enumerado de ubicaciones desde la lista
  obtenerEnumeradoDeListaUbicacion(lista, tipoUbicacion) {
    let enumerado = [];
    for (let i in lista) {
      let ubicacion = lista[i];
      let nombreUbicacion = tipoUbicacion == 0 ? ubicacion.nombrePais : (tipoUbicacion == 1 ? ubicacion.nombreDepartamento + ' - (' + ubicacion.nombrePais + ')' : ubicacion.nombreCiudad + ' - (' + ubicacion.nombreDepartamento + ')');
      let enumObj = { value: ubicacion, label: nombreUbicacion };
      enumerado.push(enumObj);
    }

    return enumerado;
  }

  // Función que arma el model de las tablas de la aplicación
  armarTabla(cabeceras, lista) {
    let cols = [];

    if (lista != null && lista.length > 0) {
      let rows = Object.keys(lista[0]);
      for (let j in rows) {
        for (let c in cabeceras) {
          let head = cabeceras[c];
          let campo = rows[j].toString();
          if (head.campoLista === campo) {
            let obj = { field: '', header: '' };
            Object.assign(this.modeloTablas, obj);
            obj.header = head.nombreCabecera;
            obj.field = campo;

            cols.push(obj);
          }
        }
      }
    }

    return cols;
  }

  // Funcion que muestra notificaciones de errores, advertencias o informativos
  mostrarNotificacion(exc) {
    let mensaje = { severity: '', summary: '', detail: '' };
    if (exc != null) {
      if (exc.mensaje == null || exc.mensaje === undefined) {
        exc.mensaje = "";
      }

      Object.assign(this.mensaje, mensaje);
      mensaje.severity = exc.mensaje.length > 0 ? this.const.severity[2] : this.const.severity[3];
      mensaje.summary = exc.mensaje.length > 0 ? "ADVERTENCIA: " : "ERROR: ";
      mensaje.detail = exc.mensaje.length > 0 ? exc.mensaje : "No se ha podido establecer la conexión con el Servidor";
    }
    else {
      return { severity: this.const.severity[3], summary: 'ERROR: ', detail: 'No se ha podido establecer la conexión con el Servidor' }
    }

    let audio = new Audio();
    audio.src = "assets/audio/guitarBad.mp3";
    audio.load();
    audio.play();

    return mensaje;
  }

  // Reproducir sonido error
  playError() {
    let audio = new Audio();
    audio.src = "assets/audio/guitarBad.mp3";
    fetch('assets/audio/guitarBad.mp3')
      .then(response => response.blob())
      .then(blob => {
        audio.load();
        return audio.play();
      })
      .then(_ => {
        console.log('Video playback started');
      })
      .catch(e => {
        console.log('Video playback failed');
      });
  }

  // Función para obtener el objeto ubicacion de una lista con el Id que está en un combo
  obtenerUbicacionDeEnum(idUbicacionEnum, listaUbicaciones) {
    let ubicacion: any;
    for (let i in listaUbicaciones) {
      let ubi = listaUbicaciones[i];
      if (ubi.idUbicacion == idUbicacionEnum) {
        ubicacion = ubi;
        break;
      }
    }
    return ubicacion;
  }

  // Función para obtener el objeto ubicacion de una lista con el código
  obtenerUbicacionPorCodigo(codigoUbicacion, listaUbicaciones, tipoUbicacion) {
    let ubicacion: any;
    let label = "";

    for (let i in listaUbicaciones) {
      let ubi = listaUbicaciones[i];

      if (tipoUbicacion == 0) {
        if (ubi.codigoPais == codigoUbicacion) {
          label = ubi.nombrePais;
          ubicacion = ubi;
          break;
        }
      }
      else if (tipoUbicacion == 1) {
        if (ubi.codigoDepartamento == codigoUbicacion) {
          label = ubi.nombreDepartamento;
          ubicacion = ubi;
          break;
        }
      }
      else if (tipoUbicacion == 2) {
        if (ubi.codigoCiudad == codigoUbicacion) {
          label = ubi.nombreCiudad;
          ubicacion = ubi;
          break;
        }
      }
    }
    return { value: ubicacion, label: label };
  }

  // Función que permite validar la estructura de un Email de acuerdo a un patrón REGEX
  validarEstructuraEmail(email) {
    let emailRegex = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$');

    return emailRegex.test(email);
  }

  // Función para buscar el código de un usuario en una lista de usuarios
  usuarioInLista(usuario, listaUsuarios) {
    let result = false;
    for (let i in listaUsuarios) {
      let user = listaUsuarios[i];
      if (user.usuario === usuario) {
        result = true;
        break;
      }
    }
    return result;
  }

  // Función para buscar el email de un usuario en una lista de usuarios
  emailInLista(email, listaUsuarios) {
    let result = false;
    for (let i in listaUsuarios) {
      let user = listaUsuarios[i];
      if (user.email === email) {
        result = true;
        break;
      }
    }
    return result;
  }

  // Función para buscar el numero de documento y tipo de documento de un usuario en una lista de usuarios
  documentoInLista(tipoDocumento, numeroDocumento, listaUsuarios) {
    let result = false;
    for (let i in listaUsuarios) {
      let user = listaUsuarios[i];
      if (user.tipoDocumento === tipoDocumento && user.numeroDocumento === numeroDocumento) {
        result = true;
        break;
      }
    }
    return result;
  }

  // Función que simula un click en un componente dado su ID
  simularClick(id) {
    document.getElementById(id).click();
  }

  // Función que copia de uno a otro elemento
  copiarElemento(source, target) {
    return Object.assign(target, source);
  }
}
