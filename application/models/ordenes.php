<?php


/**
* 
*/
class Ordenes extends CI_Model
{

	function __construct() {
		parent::__construct();
	}

	public function buscar_ordenes($palabra)
	{
		
		$where  = array('giip' =>$palabra);
		$consulta = $this->db->select('*')
		->like($where)
		->get('ordenes');
	   return $consulta->result();



	}

}


 ?>