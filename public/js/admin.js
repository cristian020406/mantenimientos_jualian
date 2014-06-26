$(document).on('ready',function(){

	$(document).on('click','#nUsuario',usuario);
})


function usuario () {
vista = 'nUsuario'
		url = $('#url').text();
	    $.post(url+'index.php/Vistas/vista_orden',{vista:vista},function(data){		
	     	$('#respuesta').html(data);
	     	$('.ui.dropdown').dropdown();
	     	$(document).on('click','#rCliente',Agregar_usuario);
		});
}
function cUsuario () {
vista = 'cUsuario'
		url = $('#url').text();
	    $.post(url+'index.php/Vistas/vista_orden',{vista:vista},function(data){		
	     	$('#respuesta').html(data);
	     	$('.ui.dropdown').dropdown();

		});
}

function Agregar_usuario () {
	var si = confirm("Esta seguro que desea crear el usuario");
	if (si) {
			 Nombre = $('#Nombre').val();
	 Apellido = $('#Apellido').val();
	 id_Genero = $('#Genero').dropdown('get value');
	 Usuario = $('#usuario').val();
	 Clave = $('#Clave').val();
	 Documento = $('#Documento').val();
	 id_Cargo = $('#Cargo').dropdown('get value');
	 id_rol = $('#Rol').dropdown('get value');

	    $.post(url+'index.php/Vistas/ingresar_usuario',{Nombre:Nombre,Apellido:Apellido,
	   id_Genero:id_Genero,Usuario:Usuario,Clave:Clave,
	   Documento:Documento,id_Cargo:id_Cargo,id_rol:id_rol },function(data){		
	   		$('#respuestadatos').removeClass('hidden');
	   		$('#respuestadatos').addClass('visible');
		})

	}

}
// °°°°°°°°°°°°°°°|Funcion para la vista de consulta de ordenes|°°°°°°°°°°°°°°°

$(document).on('click',"#btn-consulta-orden",cVistaOrden);

function cVistaOrden () {
vista = 'cOrden'
		url = $('#url').text();
	    $.post(url+'index.php/Vistas/vista_orden',{vista:vista},function(data){		
	     	$('#respuesta').html(data);
	     	$('.ui.dropdown').dropdown();
	     	$(document).on('keyup','#btn-oBuscar',cOrdenes);
		});

};
/*funcion que consulta ordenes cuando se escribe*/
function cOrdenes () {
	vBuscado = $('#btn-oBuscar').val();

  $.post(url+'index.php/Consultas/consultaOden',{vBuscado:vBuscado},function(data){		
  			$('#res-ClienteBuscado').html(data);
  				
	})


}

$(document).on('click','.ver',function() {
				$('#mimodal').modal('show');
		});

/*°°°°°°°°°°|CODIGO PARA LA VENTANA MODAL|°°°°°°°°°°°°°°°°°*/