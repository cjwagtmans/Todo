$(document).ready(function(){

	//GET ALL TODO'S FORM XML FILE
	$.ajax({
		type: "GET",
		url: "data/todo.xml",
		dataType: "xml",
		success: function(xml) {
			//USE EACH FUNCTION TO LOOP THROUGH ALL THE TODOS IN THE XML FILE
			$(xml).find('task').each(function(){
				var name = $(this).find('name').text();
				var date = $(this).find('date').text();
				var done = $(this).find('done').text();
				//USE appendTo FOR PUTTING THE FOUND DATA AFTER THE LAST ONE
				$('<tr><td>'+name+'</td><td>'+date+'</td><td>'+done+'</td></tr>').appendTo('#todo');
			});
		}
	});
});