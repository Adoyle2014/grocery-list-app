$(document).ready(function() {

	
	

	$("#submitbutton").click(function() {
		var newGroceryItem = $("#groceryiteminput").val();
		var newGroceryItemCat = $("#dropdownlist").val();
		var newGroceryItemQty = $("#numberpicker").val();
		var newListItem = '<li class="listitem"><div class="itemquantity">' + newGroceryItemQty + '</div><p class="groceryitem">' + newGroceryItem + '</p><i class="fa fa-trash-o"></i><i class="fa fa-check"></i></li>'
		var newCatagory = '<ul class="catagory" id="' + newGroceryItemCat + '"><p>' + newGroceryItemCat + '</p>'
		


		console.log(newGroceryItem + " - " + newGroceryItemCat + " - " + newGroceryItemQty + " - " + newCatagory + " - ")

		

		if($("ul#grocerylist").children("#" + newGroceryItemCat).length != 0)
			switch(newGroceryItemCat) {
	            		case 'Essentials':
			    	$("#Essentials").append(newListItem);
	            	break;
	            		case 'Dairy':
			    	$("#Dairy").append(newListItem);
	            	break;
	            		case 'Cereals/Breads':
			    	$("#Cereals/Breads").append(newListItem);
	            	break;
	            		case 'Vegetables':
			    	$("#Vegetables").append(newListItem);
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
	
});