(function(){//self invoking function

    "use strict";//always use strict 

    jQuery(document).ready(function() {  // Document is ready 

        //called when key is pressed in textbox
        jQuery("#pos-form input[name=price]").keypress(function(e){
            //if the letter is not digit then display error and don't type anything
            //acscii value(8=BS / 0=null / 48 to 57=(0-9) / 46=.)
            if( e.which != 46 && (e.which != 8 && e.which != 0) && (e.which < 48 || e.which > 57))
            {
             //display error message
             jQuery("#pos-form span.errmsg").html("Only numbers can be entered in price and delivery fees").show().fadeOut(2500);
             return false;
            }
        });

        jQuery("#pos-form input[name=price]").keyup(function(){
            sum();
        });

        jQuery("#pos-form input[name=delivery_fees]").keyup(function(){
            let price = jQuery.trim(jQuery("#pos-form input[name=price]").val());
            if(price == ""){           
               jQuery("#pos-form span.price-first").html("Enter price first!!").show().fadeOut(2000);
               return false;
            }
            else{
                sum();
            }
        }); 

    });

   function sum() {
    // debugger;
        let price = parseFloat(jQuery("#pos-form input[name=price]").val());
        let deliveryFee = parseFloat(jQuery("#pos-form input[name=delivery_fees]").val()) ||0;
        let taxPercent = 18;
        let taxPercentDecimal = taxPercent / 100;
        
        jQuery("#pos-form input[name=tax]").val(((price + deliveryFee) * taxPercentDecimal).toFixed(2));

        let totaltax = (price + deliveryFee) * taxPercentDecimal;
        jQuery("#pos-form input[name=total]").val(((price + deliveryFee) + totaltax).toFixed(2));
    }
})();