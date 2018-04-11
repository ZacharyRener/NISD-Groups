
        $(document).ready(function() {
            $('#pincode-input1').pincodeInput({hidedigits:false,complete:function(value, e, errorElement){
            	
            	$("#pincode-callback").html("This is the 'complete' callback firing. Current value: " + value);
            	
            	// check the code
            	if(value!="1234"){
            		$(errorElement).html("The code is not correct. Should be '1234'");
            	}else{
            		alert('code is correct!');
            	}
            	
            }});
            $('#pincode-input4').pincodeInput({hidedigits:false,inputs:4});
            $('#pincode-input3').pincodeInput({hidedigits:false,inputs:5});
            $('#pincode-input2').pincodeInput({hidedigits:false,inputs:6,complete:function(value, e, errorElement){
            	$("#pincode-callback").html("Complete callback from 6-digit test: Current value: " + value);
            }});
            
            
        });
 