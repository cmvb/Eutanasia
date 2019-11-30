import {Injectable} from '@angular/core';
export var url = 'http://localhost:8080/';

@Injectable()
export class DataObjects {

  getConst() {
    return {
      //Model rango de fechas para NGBDatePicker
      minDate: {year: 1000, month: 1, day: 1},
      maxDate: {year: 3000, month: 1, day: 1},
      idiomaEs: 1,
      idiomaEn: 2,

      // apiUrlExportImportUrl: 'http://localhost:8080/RestR/apiRest/restServices/importOrExportInsumo',
     
      phaseAdd: 'add',
      phaseDelete: 'delete',
      phaseSearch: 'search',
      phaseEdit: 'edit',
      phasePlus: 'plus',
      tipoCampoTexto: 1,
      tipoCampoEnum: 2,
      disabled: 'disabled',
      readOnly: 'readOnly',
      idModal: {'info': 1, 'success': 2, 'warning': 3, 'danger': 4},
      actionModal: {'show': 1, 'hidde': 2},
      accionesEdit: '',
      collectionSize: 0,
      maxSize: 1,
      rotate: true,
      pageSize: 1,
    }
  };

  getData() {
    return {
      statusId: '',
      statusMsg: '',
      statusAction: '',
      usuario: '',
      clave: '',
      nombre: '',
      apellido: '',
      email: '',
      estado: '',
      rol: '',
      swAdministrador: '',
      swActivo: '',
      urlImagen:'',
      url: '',
      perfiles: Array<any>(),
      perfilesSeleccionados: Array<any>(),
      modulo: '',
      perfilesXModulos: Array<any>(),
      descripcion: '',
      codigoInterno: '',
      imagen: '',
      tipo: '',
      value: '',
      label: '',
      param: '',
      secuencia: '',
      valorMinimo: '',
      valorMaximo: '',
      filename: '',
      file: Array<any>(),
      mimeType: '',
      contentDecodeB64: '',
      errores: Array<any>(),
      swActivoTexto: '',
      consecutivoAcceso: '',
      ip:'',
      token:'',
      swActivoLink:'',
      nombreCompleto:'',
      idModulo:'',
      idCategoria:'',
      contador:'',
      descripcionModulo:'',
      opcion:'',
      path:'',
      idPerfil:'',
      idArticulo:'',
      titulo:'',
      tags:'',
      texto:'',
      autor:'',
      usuarioGrabado:'',
      fechaGrabado:'',
      resumen:'',
      swCrear:'',
      swEditar:'',
      swEliminar:'',
      swExtra:'',
      swBuscar:'',
      id:'',
      fileName:'',
      folder:'',
      date:'',
      time:'',
      claveConfirma:'',
      reload:'',
    }
  };

  getEnumerados() {
    let properties = this.getProperties(this.getConst().idiomaEn);
    return {
      sino: {
        cod: 1, valores: [
          {value: 1, label: properties.lbl_enum_si},
          {value: 0, label: properties.lbl_enum_no}
        ]
      },
      modulo: {
        cod: 2, valores: [
          {value: 1, label: properties.lbl_enum_modulo_tb_perfil},
          {value: 2, label: properties.lbl_enum_modulo_tb_usuario},
          {value: 3, label: properties.lbl_enum_modulo_tb_perfil_x_usuario}
        ]
      },
      sexo: {
        cod: 3, valores: [
          {value: 1, label: properties.lbl_enum_sexo_valor_masculino},
          {value: 2, label: properties.lbl_enum_sexo_valor_femenino},
          {value: 3, label: properties.lbl_enum_sexo_valor_ambos}
        ]
      },
      estadoUsuario: {
        cod: 4, valores: [
          {value: 0, label: properties.lbl_enum_estado_usuario_inactivo},
          {value: 1, label: properties.lbl_enum_estado_usuario_registrado},
          {value: 2, label: properties.lbl_enum_estado_usuario_pendiente_datos},
          {value: 3, label: properties.lbl_enum_estado_usuario_pendiente_activacion},
          {value: 4, label: properties.lbl_enum_estado_usuario_pendiente_cambio_clave},
          {value: 5, label: properties.lbl_enum_estado_usuario_activo},
        ]
      },
      rolUsuario: {
        cod: 5, valores: [
          {value: 1, label: properties.lbl_enum_rol_usuario_super_admin},
          {value: 2, label: properties.lbl_enum_rol_usuario_admin},
          {value: 3, label: properties.lbl_enum_rol_usuario_content_employee},
        ]
      },
      //valorIva: {cod: 25},

    }
  };

  getProperties(idioma) {
    let constant = this.getConst();
    return {
      lbl_ruta_imagenes_articulos: idioma == constant.idiomaEs ? 'http://servidor.globeguides.co/imagenes/' : 'http://servidor.globeguides.co/imagenes/',

      lbl_info_sin_resultados: idioma == constant.idiomaEs ? 'Sin Resultados' : 'Without Results',
      lbl_info_fallo_conectar_base_datos: idioma == constant.idiomaEs ? 'No hay Conexión a la Base de Datos' : 'Without Conection to Data Base',
      lbl_info_cargando_resultados: idioma == constant.idiomaEs ? 'Cargando Resultados' : 'Loading Results',
      lbl_info_proceso_completo: idioma == constant.idiomaEs ? 'Proceso realizado Satisfactoriamente' : 'Process Complete',

      lbl_info_titulo_modal_error: idioma == constant.idiomaEs ? 'ERROR' : 'ERROR',
      lbl_info_titulo_modal_informacion: idioma == constant.idiomaEs ? 'INFROMACION' : 'INFORMATION',
      lbl_info_titulo_modal_advertencia: idioma == constant.idiomaEs ? 'ADVERTECNIA' : 'WARNING',
      lbl_info_titulo_modal_proceso_exitoso: idioma == constant.idiomaEs ? 'PROCESO EXITOSO' : 'PROCESS COMPLETE',

      lbl_mtto: idioma == constant.idiomaEs ? 'Mantenimientos' : 'Settings',
      lbl_mtto_seguridad: idioma == constant.idiomaEs ? 'Seguridad' : 'Security',
      lbl_mtto_basicos: idioma == constant.idiomaEs ? 'Básicos' : 'Basics',
      lbl_mtto_valores: idioma == constant.idiomaEs ? 'Valores' : 'Values',

      //menu
      lbl_menu_usuario: idioma == constant.idiomaEs ? 'Usuarios' : 'Users',
      lbl_menu_perfil: idioma == constant.idiomaEs ? 'Perfiles' : 'Profiles',
      lbl_menu_perfil_x_usuario: idioma == constant.idiomaEs ? 'Perfiles X Usuario' : 'Profiles By User',
      lbl_menu_conjunto: idioma == constant.idiomaEs ? 'Conjunto' : 'Sets',
      lbl_menu_indice: idioma == constant.idiomaEs ? 'Indice' : 'Indice',
      lbl_menu_cups: idioma == constant.idiomaEs ? 'CUPS' : 'CUPS',
      lbl_menu_insumos: idioma == constant.idiomaEs ? 'Insumos' : 'Supplies',
      lbl_menu_examenes: idioma == constant.idiomaEs ? 'Exámenes' : 'Exams',
      lbl_menu_modulos: idioma == constant.idiomaEs ? 'Módulos' : 'Modules',
      lbl_menu_submodulos: idioma == constant.idiomaEs ? 'Sub Módulos' : 'Sub Modules',
      lbl_menu_municipio: idioma == constant.idiomaEs ? 'Municipios' : 'Municipalities',
      lbl_menu_laboratorio: idioma == constant.idiomaEs ? 'Laboratorios' : 'Labs',
      lbl_menu_unidad: idioma == constant.idiomaEs ? 'Unidades' : 'Units',
      lbl_menu_departamento: idioma == constant.idiomaEs ? 'Departamento' : 'Departamento',
      lbl_menu_centro_costo: idioma == constant.idiomaEs ? 'Centros de Costo' : 'Cost Centers',
      lbl_menu_tipo_identificacion: idioma == constant.idiomaEs ? 'Tipos de Identificicón' : 'Type Identification',
      lbl_menu_cuenta: idioma == constant.idiomaEs ? 'Cuenta' : 'Account',
      lbl_menu_retefuente: idioma == constant.idiomaEs ? 'Retefuente' : 'Retefuente',
      lbl_menu_iva: idioma == constant.idiomaEs ? 'Iva' : 'Iva',
      lbl_menu_forma_pago: idioma == constant.idiomaEs ? 'Forma Pago' : 'Way to Pay',
      lbl_menu_reteica: idioma == constant.idiomaEs ? 'Reteica' : 'Reteica',
      lbl_menu_producto: idioma == constant.idiomaEs ? 'Producto' : 'Product',

      // actions
      lbl_btn_consultar: idioma == constant.idiomaEs ? 'Consultar' : 'Query',
      lbl_btn_edicion: idioma == constant.idiomaEs ? 'Agregar' : 'Add',
      lbl_btn_limpiar: idioma == constant.idiomaEs ? 'Limpiar' : 'Clean',
      lbl_btn_atras: idioma == constant.idiomaEs ? 'Atrás' : 'Back',
      lbl_btn_masivo: idioma == constant.idiomaEs ? 'Masivo' : 'Masive',
      lbl_btn_exportar: idioma == constant.idiomaEs ? 'Exportar' : 'Export',
      lbl_btn_importar: idioma == constant.idiomaEs ? 'Importar' : 'Import',
      lbl_btn_actualizar: idioma == constant.idiomaEs ? 'Actualizar' : 'Update',
      lbl_btn_ite_remover: idioma == constant.idiomaEs ? 'Remover' : 'Remove',
      lbl_btn_ite_agregar: idioma == constant.idiomaEs ? 'Agregar' : 'Add',
      lbl_tip_agregar: idioma == constant.idiomaEs ? 'Haga [Clic] para agregar un nuevo registro' : 'Click to add a new register',
      lbl_tip_editar: idioma == constant.idiomaEs ? 'Haga [Clic] para editar registro' : 'Click to edit the register selected',
      lbl_tip_eliminar: idioma == constant.idiomaEs ? 'Haga [Clic] para eliminar registro' : 'Click to delete the register selected',
      lbl_tip_buscar: idioma == constant.idiomaEs ? 'Haga [Clic] para buscar registros' : 'Click to search registers',
      lbl_tip_limpiar: idioma == constant.idiomaEs ? 'Haga [Clic] para limpiar' : 'Click to clean',
      lbl_tip_anterior: idioma == constant.idiomaEs ? 'Haga [Clic] para Regresas' : 'Click to go back',
      lbl_tip_actualizar: idioma == constant.idiomaEs ? 'Haga [Clic] para Actualizar' : 'Click to Update',

      //enums
      lbl_enum_si: idioma == constant.idiomaEs ? 'Si' : 'Yes',
      lbl_enum_no: idioma == constant.idiomaEs ? 'No' : 'No',

      lbl_enum_tipo_id_ti: idioma == constant.idiomaEs ? 'Tarjeta de Identidad' : 'Identity Card',
      lbl_enum_tipo_id_cc: idioma == constant.idiomaEs ? 'Cédula de Ciudadanía' : 'Document Card',
      lbl_enum_tipo_id_pa: idioma == constant.idiomaEs ? 'Pasaporte' : 'Passport',

      lbl_enum_modulo_test: idioma == constant.idiomaEs ? 'Test' : 'Test',
      lbl_enum_modulo_tb_perfil: idioma == constant.idiomaEs ? 'Perfil' : 'Profile',
      lbl_enum_modulo_tb_usuario: idioma == constant.idiomaEs ? 'Usuario' : 'User',
      lbl_enum_modulo_tb_perfil_x_usuario: idioma == constant.idiomaEs ? 'Perfil x Usuario' : 'Profile x User',
      
      lbl_enum_sexo_valor_masculino: idioma == constant.idiomaEs ? 'Masculino' : 'Man',
      lbl_enum_sexo_valor_femenino: idioma == constant.idiomaEs ? 'Femenino' : 'Femenino',
      lbl_enum_sexo_valor_ambos: idioma == constant.idiomaEs ? 'Ambos' : 'Ambos',
  
      lbl_enum_estado_usuario_inactivo: idioma == constant.idiomaEs ? 'Inactivo' : 'Inactive',
      lbl_enum_estado_usuario_registrado: idioma == constant.idiomaEs ? 'Registrado' : 'Registered',
      lbl_enum_estado_usuario_pendiente_datos: idioma == constant.idiomaEs ? 'Pendiente Datos' : 'Pending Info',
      lbl_enum_estado_usuario_pendiente_activacion: idioma == constant.idiomaEs ? 'Pendiente Activación' : 'Pending Activation',
      lbl_enum_estado_usuario_pendiente_cambio_clave: idioma == constant.idiomaEs ? 'Pendiente Cambio Clave' : 'Pending Key Change',
      lbl_enum_estado_usuario_activo: idioma == constant.idiomaEs ? 'Activo' : 'Active',

      lbl_enum_rol_usuario_super_admin: idioma == constant.idiomaEs ? 'Super Administrador' : 'Super Admin',
      lbl_enum_rol_usuario_admin: idioma == constant.idiomaEs ? 'Administrador' : 'Admin',
      lbl_enum_rol_usuario_empleado: idioma == constant.idiomaEs ? 'Empleado' : 'Employee',
      lbl_enum_rol_usuario_lider: idioma == constant.idiomaEs ? 'Empleado Lider' : 'Leading Employee',
      lbl_enum_rol_usuario_cliente: idioma == constant.idiomaEs ? 'Cliente' : 'Client',
      lbl_enum_rol_usuario_content_employee: idioma == constant.idiomaEs ? 'Empleado de Contenido' : 'Content Employee',

      //iterador
      lbl_iterador_modulo: idioma == constant.idiomaEs ? 'Módulo' : 'Module',
      lbl_iterador_descripcion_modulo: idioma == constant.idiomaEs ? 'Descripción Módulo' : 'Module Description',
      lbl_iterador_actualizar: idioma == constant.idiomaEs ? 'Actualizar' : 'Update',
      lbl_iterador_eliminar: idioma == constant.idiomaEs ? 'Eliminar' : 'Delete',
      lbl_iterador_crear: idioma == constant.idiomaEs ? 'Crear' : 'Create',
      lbl_iterador_buscar: idioma == constant.idiomaEs ? 'Buscar' : 'Search',
      lbl_iterador_extra: idioma == constant.idiomaEs ? 'Extra' : 'Extra',

      //MTTOS
      lbl_mtto_consulta: idioma == constant.idiomaEs ? 'Consulta' : 'Query',
      lbl_mtto_edicion: idioma == constant.idiomaEs ? 'Edicion' : 'Edit',

      // Usuario
      lbl_mtto_usuario_title: idioma == constant.idiomaEs ? 'Configuración de Usuarios' : 'Users Settings',
      lbl_mtto_usuario_nombre: idioma == constant.idiomaEs ? 'Nombre' : 'First Name',
      lbl_mtto_usuario_apellido: idioma == constant.idiomaEs ? 'Apellido' : 'Last Name',
      lbl_mtto_usuario_usuario: idioma == constant.idiomaEs ? 'Usuario' : 'User',
      lbl_mtto_usuario_email: idioma == constant.idiomaEs ? 'Email' : 'Email',
      lbl_mtto_usuario_estado: idioma == constant.idiomaEs ? 'Estado' : 'State',
      lbl_mtto_usuario_rol: idioma == constant.idiomaEs ? 'Rol' : 'Role',
      lbl_mtto_usuario_sw_administrador: idioma == constant.idiomaEs ? 'Administrador' : 'Admin',
      lbl_mtto_usuario_sw_activo: idioma == constant.idiomaEs ? 'Activo' : 'Active',

      // Categoria
      lbl_mtto_categoria_title: idioma == constant.idiomaEs ? 'Configuración de Categorías' : 'Categories Settings',
      lbl_mtto_categoria_categoria: idioma == constant.idiomaEs ? 'Nombre' : 'First Name',
      lbl_mtto_categoria_descripcion: idioma == constant.idiomaEs ? 'Descripción' : 'Description',

      // articulo
      lbl_mtto_articulo_title_mtto: idioma == constant.idiomaEs ? 'Configuración de Artículos' : 'Articles Settings',
      lbl_mtto_articulo_title: idioma == constant.idiomaEs ? 'Título' : 'Title',
      lbl_mtto_articulo_tags: idioma == constant.idiomaEs ? 'Tags' : 'Tags',
      lbl_mtto_articulo_texto: idioma == constant.idiomaEs ? 'Texto' : 'Text',
      lbl_mtto_articulo_url_imagen: idioma == constant.idiomaEs ? 'Imagen Principal' : 'Main Image',
      lbl_mtto_articulo_autor: idioma == constant.idiomaEs ? 'Autor' : 'Author',
      lbl_mtto_articulo_resumen: idioma == constant.idiomaEs ? 'Resumen' : 'Summary',
      lbl_mtto_articulo_fecha: idioma == constant.idiomaEs ? 'Fecha' : 'Date',
    }
  };
}


