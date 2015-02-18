$(document).ready(function() {

	
	

	$("#submitbutton").click(function() {
		var newGroceryItem = $("#groceryiteminput").val();
		var newGroceryItemCat = $("#dropdownlist").val();
		var newGroceryItemQty = $("#numberpicker").val();
		var newListItem = '<li class="listitem"><div class="itemquantity">' + newGroceryItemQty + '</div><p class="groceryitem unchecked">' + newGroceryItem + '</p><i class="fa fa-trash-o"></i></li>'
		var newCatagory = '<ul class="catagory" id="' + newGroceryItemCat + '"><p>' + newGroceryItemCat + '</p>'
		

		if($("ul#grocerylist").children("#" + newGroceryItemCat).length != 0)
			switch(newGroceryItemCat) {
	            		case 'Essentials':
			    	$("#Essentials").append(newListItem);
	            	break;
	            		case 'Dairy':
			    	$("#Dairy").append(newListItem);
	            	break;
	            		case 'Breads':
			    	$("#Breads").append(newListItem);
	            	break;
	            		case 'Produce':
			    	$("#Produce").append(newListItem);
	            	break;
	            	case 'Meats':
			    	$("#Meats").append(newListItem);
	            	break;
	            		case 'Other':
			    	$("#Other").append(newListItem);
	            	break;
	        }
	        else {

	        	$("ul#grocerylist").append(newCatagory);
	        	$( "#" +  newGroceryItemCat).append(newListItem);        	
	        };
		
	});

	$('#grocerylist').on('click', '.groceryitem', function() {
		$(this).toggleClass('unchecked'); 
});
	
	
	
});
