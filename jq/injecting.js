
function fillHome(divID,user){
			var randomid = parseInt(Math.random()*11)+1;
			console.log("randomid="+randomid);
			$.ajax({
				url: "http://zacharyrener.com/testing.php?uname="+user+"&quoteid="+randomid,    
				dataType: "JSON",                                
				success: function (data) {                      
					console.log("connected testing.php");
					localStorage.setItem("data_4",JSON.stringify(data));
					var contents = JSON.parse(localStorage.getItem("data_4"));
					console.log("ajax conntected to testing.php::"+contents);
								
					localStorage.setItem(user+"-home",contents);
				}
});
		//$(divID+"-footer").html('<div class="home-about-div"><h1 class="h1-welcome">About NISD Groups</h1><img class="home-about-arrow" src="http://www.zacharyrener.com/img-down-arrow-1.png"></div>');
		$(divID).html(localStorage.getItem(user+"-home"));
			
		
	
}

function injection(divID, sorttype, category){
		
	if (category=="name"){
		
		
			//console.log('null sorttype+category');
			$.ajax({
				url: "http://zacharyrener.com/phpAllPrincipals.php?sort_type="+sorttype,    
				dataType: "JSON",                                
				success: function (data) {                      
					console.log("connected");
					localStorage.setItem("data_1",JSON.stringify(data));
					var contents = JSON.parse(localStorage.getItem("data_1"));
					localStorage.setItem(sorttype+category,contents);
				}
    		
				});
			
			
		
			$(divID).html(localStorage.getItem(sorttype+category));
		
		
		
	}else if (category=="campus") {
		//phpRoleSort call TODO
		
			//console.log('null sorttype+category');
			$.ajax({
				url: "http://zacharyrener.com/phpRoleSort.php?sort_type="+sorttype,    
				dataType: "JSON",                                
				success: function (data) {                      
					console.log("connected");
					localStorage.setItem("data_2",JSON.stringify(data));
					var contents = JSON.parse(localStorage.getItem("data_2"));
					localStorage.setItem(sorttype+category,contents);
    		}
});
			
		
			$(divID).html(localStorage.getItem(sorttype+category));
		
	}
	

}

//BOTH NEED FUNCTION TO UPLOAD IMAGE AND USE LOCAL DIRECTORY RATHER THAN URL. BELOW IS REDUNDANT.
function fillLogo(){
	
	$.ajax({
				url: "http://admin.zacharyrener.com/phpRetrieve.php",    
				dataType: "JSON",                                
				success: function (data) {                      
					localStorage.setItem("temp_logo_url",JSON.stringify(data));
					var contents = JSON.parse(localStorage.getItem("temp_logo_url")); //contents = link1 link2
					//$(divID).html(contents);
					console.log("FILLOGO:" + contents.split(" ")[0]);
					localStorage.setItem("logo_url",contents.split(" ")[0]);
    }
	});
	
	

		//if its not already cached, pull from online and then cache.
		//$(".header_logo").html('<img src="' + localStorage.getItem("logo_url") + '" width=150/>');
		//$(".panel_logo").html('<img style="margin-bottom: 40px;margin-left:13%;" src="' + localStorage.getItem("logo_url") + '"  width="150"/>');

		//set the cache
		localStorage.setItem("temp_logo_url",'<img src="' + localStorage.getItem("logo_url") + '"  width="150"/>');
		localStorage.setItem("sidebar_logo",'<img style="margin-bottom: 40px;margin-left:13%;" src="' + localStorage.getItem("logo_url") + '"  width="150"/>');
		
		//set img
		$(".header_logo").html(localStorage.getItem("temp_logo_url"));
		$(".panel_logo").html(localStorage.getItem("sidebar_logo"));


	
	

}




function fillSidebar(){
	
	$.ajax({
				url: "http://admin.zacharyrener.com/phpRetrieve.php",    
				dataType: "JSON",                                
				success: function (data) {                      
					localStorage.setItem("temp_sidebar_url",JSON.stringify(data));
					var contents = JSON.parse(localStorage.getItem("temp_sidebar_url")); //contents = link1 link2
					//$(divID).html(contents);
					console.log("FILLOGO:" + contents.split(" ")[1]);
					localStorage.setItem("sidebar_url",contents.split(" ")[1]);
    }
	});
	
	

		//if its not already cached, pull from online and then cache.
		$("#panel_image").html('<img style="width:550px; margin-left:-326px; margin-top:13px; opacity: 0.5; margin-bottom:13px;" src="'+ localStorage.getItem("sidebar_url") +'" />'); 

	


	
	

}

function cache_settings(){
	
	
	$.ajax({
				url: "http://admin.zacharyrener.com/phpSettings.php",    
				dataType: "JSON",                                
				success: function (data) {                      
					localStorage.setItem("temp_settings",JSON.stringify(data));
					var contents = JSON.parse(localStorage.getItem("temp_settings")); //contents = link1 link2
					//$(divID).html(contents);
					//console.log("FILLOGO:" + contents.split(" ")[1]);
					localStorage.setItem("settings_r",contents.split(" ")[0]);
					localStorage.setItem("settings_g",contents.split(" ")[1]);
					localStorage.setItem("settings_b",contents.split(" ")[2]);
					localStorage.setItem("settings_url",contents.split(" ")[3]);
    }
	});
	
		//console.log("HERE" + "url('"+localStorage.getItem("settings_url")+"') !important");
		$("body").css({
			"background":"url('"+localStorage.getItem("settings_url")+"') !important",
			"background-repeat":"no-repeat !important",
			"background-size":"cover !important"
		});
	
		$(".panel01 li").css({
			"background":"rgba("+localStorage.getItem("settings_r")+","+localStorage.getItem("settings_g")+","+localStorage.getItem("settings_b")+",0.5)"
		});
		$(".principalNav .ui-btn").css({
			"background":"rgba("+localStorage.getItem("settings_r")+","+localStorage.getItem("settings_g")+","+localStorage.getItem("settings_b")+",0.5)"
		});
		$(".headerDiv").css({
			"background":"rgba("+localStorage.getItem("settings_r")+","+localStorage.getItem("settings_g")+","+localStorage.getItem("settings_b")+",0.5)",
			"position":"absolute",
			"top":"0px",
			"bottom":"34px",
			"width":"100%",
			"height":"58px"
		});
		$(".ui-state-persist").css({
			"background":"rgba("+localStorage.getItem("settings_r")+","+localStorage.getItem("settings_g")+","+localStorage.getItem("settings_b")+",0.5)"
		});
		$("#loginPage").css({
			"background":"rgba("+localStorage.getItem("settings_r")+","+localStorage.getItem("settings_g")+","+localStorage.getItem("settings_b")+")",
			"color":"white"
		});
		
		
		
	
}


	$(document).ready(function(){
		cache_settings();
		fillSidebar();
		fillLogo();
		fillHome ("#homeByCampusContent",localStorage.getItem("1"));
		fillHome ("#homeContent",localStorage.getItem("1"));
		console.log(localStorage.getItem("1"));
		injection("#keyContacts_content","key","name");
		injection("#keyContactsByCampus_content","key","name");
		injection("#allPrinciples_content","all","name");
		injection("#allPrinciplesByCampus_content","all","campus");
		injection("#elemPrinciples_content","elementary","name");
		injection("#elemPrinciplesByCampus_content","elementary","campus");
		injection("#midPrinciples_content","middle","name");
		injection("#midPrinciplesByCampus_content","middle","campus");
		injection("#highPrinciples_content","high","name");
		injection("#highPrinciplesByCampus_content","high","campus");
		injection("#allContacts_content","allTotal","name");
	});
		