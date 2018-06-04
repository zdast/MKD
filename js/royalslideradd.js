jQuery(document).ready(function($) {
  $('#gallery-1,#gallery-2,#gallery-3').royalSlider({
    fullscreen: {
      enabled: true,
      nativeFS: true
    },
    controlNavigation: 'thumbnails',
    autoScaleSlider: true, 
    autoScaleSliderWidth: 1000,     
    autoScaleSliderHeight: 850,
    loop: false,
    numImagesToPreload:4,
    arrowsNavAutohide: true,
    arrowsNavHideOnTouch: true,
    keyboardNavEnabled: true
  });
  
  
  
   $('.description_image').html( $('.rsThumbsContainer ').eq(0).find('img').attr('alt'));
   $('.rsThumbsContainer div').click(function(){$('.description_image').html( $(this).find('img').attr('alt'));}); 
    $('.rsArrowIcn').click(function(){$('.description_image').html( $('.rsThumbsContainer div.rsNavSelected').find('img').attr('alt'));});
		
	 
	$('.rsSlide img').live('click',function(){  $('.description_image').html( $('.rsThumbsContainer div.rsNavSelected').find('img').attr('alt'));   }); 
		
		
  
});	 
	