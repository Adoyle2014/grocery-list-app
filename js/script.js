$(document).ready(function () {
//watermarks===================================
    $("#groceryiteminput").watermark("Enter Item");
    $("#numberpicker").watermark("1gl or 1dz etc.");

//declare global variables================================
        var catCount = 0;
        var itemCount = 0;

//submit new item action============================
    $("#submitbutton").click(function () {

//declare local variables
        var newGroceryItem = $("#groceryiteminput").val();
        var newGroceryItemCat = $("#dropdownlist").val();
        var newGroceryItemQty = $("#numberpicker").val();
        var newListItem = '<li class="listitem" data-item-id="' + itemCount + '"><div class="itemquantity">' + newGroceryItemQty + '</div><p class="groceryitem unchecked">' + newGroceryItem + '</p><i class="fa fa-trash-o"></i></li>';
        var newCatagory = '<ul class="catagory" id="' + newGroceryItemCat + '" data-cat-id="' + catCount + '"><p>' + newGroceryItemCat + '</p>';
        
//add items and catagories=======================
        if ($("#grocerylist").children("#" + newGroceryItemCat).length !== 0) switch (newGroceryItemCat) {
            case 'Essentials':
                $("ul#Essentials").append(newListItem);
                itemCount++;
                break;
            case 'Dairy':
                $("ul#Dairy").append(newListItem);
                 itemCount++;
                break;
            case 'Breads':
                $("ul#Breads").append(newListItem);
                 itemCount++;
                break;
            case 'Produce':
                $("ul#Produce").append(newListItem);
                 itemCount++;
                break;
            case 'Meats':
                $("ul#Meats").append(newListItem);
                 itemCount++;
                break;
            case 'Other':
                $("ul#Other").append(newListItem);
                 itemCount++;
                break;
        } else {

            $("ul#grocerylist").append(newCatagory);
            $("ul#" + newGroceryItemCat).append(newListItem);
            catCount++;
            itemCount++;
        }
    });

//add-remove strike through=======================
    $('ul#grocerylist').on('click', '.groceryitem', function () {
        $(this).toggleClass('unchecked');
    });

 //remove items and catagories=====================
    $('ul#grocerylist').on('click', 'i.fa-trash-o', function () {
        var itemId = $(this).closest('li').data('item-id');
        var catId = $(this).closest('ul').data('cat-id');

        if (($(this).closest('ul.catagory').children('li').length) === 1) {
            $('ul[data-cat-id="' + catId + '"').remove();
            
            console.log(catCount + " - " + itemCount);
        } else {
            $('li[data-item-id="' + itemId + '"').remove();
            itemCount--;
            console.log(catCount + " - " + itemCount);
        }
    });

// views =============================================

// alpha up view ---------------------

    $(".alphaupview").click(function (e) {
        e.preventDefault();
        $(".normal, .alphadown").css({
            display: 'none'
        });
        $(".alphaup").css({
            display: 'inline'
        });
    });

// normal view ---------------------

    $(".normalview").click(function (e) {
        e.preventDefault();
        $(".alphaup, .alphadown").css({
            display: 'none'
        });
        $(".normal").css({
            display: 'inline'
        });
    });

// alpha down view ---------------------

    $(".alphadownview").click(function (e) {
        e.preventDefault();
        $(".normal, .alphaup").css({
            display: 'none'
        });
        $(".alphadown").css({
            display: 'inline'
        });
    });
});

