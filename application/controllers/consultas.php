<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Consultas extends CI_Controller {

	function __construct() {
		parent:: __construct();
	}


public function consultaOden()
{
	$valorbuscado=$this->input->post('vBuscado',true);
	$this->load->model('ordenes');
	$respuesta=$this->ordenes->buscar_ordenes($valorbuscado);

	$this->load->view('administrador/consultas/orden_consultada',compact('respuesta'));
}




}