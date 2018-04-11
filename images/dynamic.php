<?php

	header("Content-type: text/css");

	//Declaring Editable Variables
		//Variables for Setting the Color Scheme
		$color_r;
		$color_g;
		$color_b;

		//Variable for Setting the Background Images
		$image_url;

	//Assigning values based on admin panel input
	$color_r = 128;
	$color_g = 20;
	$color_b = 39;

	//Assigning value for the image
	$image_url = "//admin.zacharyrener.com/images/eaton-crop-dark.png";

?>
h4{
	color:pink !important;
}

/* Changing the background color -------------------------------------------------------------------------------- */

.panel01 li{
	background:rgba(<?php echo($color_r); ?>, <?php echo($color_g); ?>, <?php echo($color_b); ?>, .5); 
}
.principalNav .ui-btn{
	background:rgba(<?php echo($color_r); ?>, <?php echo($color_g); ?>, <?php echo($color_b); ?>, .5); 
}
.headerDiv{
	background:rgba(<?php echo($color_r); ?>, <?php echo($color_g); ?>, <?php echo($color_b); ?>, .5); 
	position:absolute;
	top:0px;
	bottom:34px;
	width:100%;
	height: 58px;
}
.ui-state-persist{
	background:rgba(<?php echo($color_r); ?>, <?php echo($color_g); ?>, <?php echo($color_b); ?>, .5); 
	border-top:1px solid white !important; /** WHITE BORDERS */
}
#loginPage{
	background:rgba(<?php echo($color_r); ?>, <?php echo($color_g); ?>, <?php echo($color_b); ?>, .5); 
	color:white;
}

/* -------------------------------------------------------------------------------------------------------------- */








/* Changing the background image -------------------------------------------------------------------------------- */




body {
 	    background: url("<?php echo($image_url); ?>")  !important; /** BACKGROUND IMAGE */
    	background-repeat: no-repeat!important;	
	   	background-repeat: no-repeat !important;
    	background-size: cover !important;	
	
}





/* -------------------------------------------------------------------------------------------------------------- */









/* Changing the font selection ---------------------------------------------------------------------------------- */

.h3-author{
	color:white;
	font-family:"Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif";
	font-weight:100;
	text-align:center;
	margin-top:-07%;
	font-size:1.4em;
	margin-left:20%;;
}
.h2-quote{
	
	color:white;
	font-family:"Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif";
	font-weight:100;
	text-align:center;
	font-style:italic;
	padding:10%;
	font-size:1.5em;
	margin-bottom:0px;
}
.h1-welcome{color:white;
	font-family:"Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif";
	font-weight:100;
	text-align:center;
	margin-top:09%;
}
.home-about-div h2{
	font-size:1.5em;
	color:white;
	font-family:"Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif";
	font-weight:100;
	text-align:center;
	margin-top:0%;
	text-transform: uppercase;
}

/* -------------------------------------------------------------------------------------------------------------- */