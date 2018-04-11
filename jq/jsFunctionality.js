document.addEventListener('deviceready', function(){
StatusBar.backgroundColorByHexString('#3399FF');
$.mobile.hideUrlBar = true;});
$.mobile.hideUrlBar = true;
$(function () {
  		$("[data-role=panel]").enhanceWithin().panel();
		$(document).on("pageshow","#keyContacts",function(){
  			
		});
});
$(document).on('swiperight', '.ui-page', function(event){     
   
				$( "#panel-01" ).panel( "open" );
	          
});
/*$(document).on('swipeleft', '.ui-page', function(event){    
    if(event.handled !== true) 
    {    
        var nextpage = $.mobile.activePage.next('[data-role="page"]')
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
			
        }
        event.handled = true;
    }
    return false;         
});

$(document).on('swiperight', '.ui-page', function(event){     
    if(event.handled !== true) 
    {      
        var prevpage = $(this).prev('[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
			
        }else{
			if ($.mobile.activePage.attr("id")=="home" ){
				$( "#panel-01" ).panel( "open" );
			}
		}
        event.handled = true;
    }
    return false;            
});*/

function loginFunction(form){
	if(form.userName.value=="Nisdtx" && form.pass.value=="example"){
		form.userName.value=""; form.pass.value=""
		document.location.href = "#home";
	}else{
		alert("Wrong username or password. Please try again.");
	}	
}

function forgotPass(){
	alert("To request to have the login sent to you, please contact borth@nisdtx.org through your Northwest ISD provided email.");
}

function logOut(){
	$("panel-01").panel("close");
	window.location.href = './index.html';
	
}
$(document).ready(function() {
			
            $('#pincode-input1').pincodeInput({hidedigits:false,complete:function(value, e, errorElement){
            	
            	$("#pincode-callback").html("This is the 'complete' callback firing. Current value: " + value);
            	
            	// check the code
            	if(value!="5813"){
            		alert("PIN Entry incorrect. Please try again.")
					$('#pincode-input1').pincodeInput().data('plugin_pincodeInput').clear();
					Keyboard.show;
					$('#pincode-input1').pincodeInput().data('plugin_pincodeInput').focus();
            	}else{
            		window.location.href = './login.html';
            	}
            	
            }});
            $('#pincode-input4').pincodeInput({hidedigits:false,inputs:4});
            $('#pincode-input3').pincodeInput({hidedigits:false,inputs:5});
            $('#pincode-input2').pincodeInput({hidedigits:false,inputs:6,complete:function(value, e, errorElement){
            	$("#pincode-callback").html("Complete callback from 6-digit test: Current value: " + value);
            }});
			
			
            
            
        });
			window.onload = function() {
  				document.getElementById("pincode-input1").focus();
			};