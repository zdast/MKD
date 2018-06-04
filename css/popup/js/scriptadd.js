if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

}
else{
$(function(){
 	    if($.cookie('overlay')=='overlay'){
		var number =$.cookie('number');number++;$.cookie('number',number); 
      	}else{ $.cookie('overlay', 'overlay', { expires: 7 });  $.cookie('number','0');}
 		if($.cookie('number') % 1 ==0){
	    setTimeout(function(){
 		$.fancybox({'autoDimensions':   false,
        'width'         :   '780px',
        'height'        :   '460px',		
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600, 'autoScale':true,'autoDimensions':true,
        'speedOut'      :   200, 
        'overlayShow'   :   false,
        'hideOnOverlayClick' : false, 'type' : 'iframe',
		'href':$(".fancybox").attr('href')});}, 15000); //45000
		}
 	});		
}


