<script src="<?php echo base_url() ?>public/js/jquery.js"></script>
<script src="<?php echo base_url() ?>public/js/semantic.min.js"></script>
<script src="<?php echo base_url() ?>public/js/admin.js"></script>
<script > 
$(document).on('ready',function () {
	$('.sidebar') .sidebar('toggle');
})
$(document).on('click','#orden1',function(){
	// alert('funcionando');
	$('.ui.dropdown').dropdown();


});

$('.ui.dropdown')
  .dropdown()
;

$('.your.element')
  .dropdown('behavior name', argumentOne, argumentTwo)
;

</script>