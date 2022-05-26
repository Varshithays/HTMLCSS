console.clear();
var select = document.getElementById("selectDestinasjon");
	var options = [
	{"place":"USA","price":"20"}, 
	{"place":"Europe","price":"30"}, 
	{"place":"London","price":"40"}];
	for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt.place;
    el.value = opt.price;
    select.appendChild(el);
	}  
  
var select = document.getElementById("selectRom");	
	var select2 = document.getElementById("selectRom2");
	var options = ["1", "2", "3"];
	for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
     var el2 = document.createElement("option");
    el2.textContent = opt;
    el2.value = opt;
    select.appendChild(el);
    select2.appendChild(el2);
	}
	
  $("#myb").click(function() {
  		var price = 0;
      var txt = "";
  		txt += "You wish to order "+$("#selectDestinastion option:selected").text();
      price = $("#selectDestinasjon").val();
      
      txt += " the "+$("#date").val();
 
      txt += " for "+$("#number").val()+" days";
      price *= $("#number").val();
      
      txt += " with "+$("#selectRom option:selected").text()+ " single rooms";
      price += $("#selectRom").data("price")*parseFloat($("#selectRom option:selected").text());
      
      txt += " and "+$("#selectRom2 option:selected").text()+ " double rooms.";
      price += $("#selectRom2").data("price")*parseFloat($("#selectRom2 option:selected").text());
      
      if ($("#skipass").prop("checked") && $("#equipment").prop("checked") ) {
      		txt += " Wish a skipass and equipment to rent.";
          price += $("#skipass").data("price")+$("#equipment").data("price");
      } else if ($("#skipass").prop("checked") ) {
          txt += " Wish a skipass.";
          price += $("#skipass").data("price");
      } else if ($("#equipment").prop("checked") ) {
      		txt += " Wish to rent equipment.";
          price +=  $("#equipment").data("price");
      } else {
         txt += " Wish not to rent equipement.";
      }
      $("#order").val(txt);
      $("#totalPrice").text(price+"$");
  
  })
