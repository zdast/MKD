function LoadGmaps() {
				var latlng = new google.maps.LatLng(45.682671,-73.923367);
				var options = {
					center: latlng,
					zoom: 17,
					scrollwheel: false,
					styles:[
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#212121" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#d4ea19" }
    ]
  },{
  }
],					
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				
				var carte = new google.maps.Map(document.getElementById("contact-map"), options);
				
				var marqueur = new google.maps.Marker({
					position: new google.maps.LatLng(45.682671,-73.923367),
					map: carte
				});

				var infowindow = new google.maps.InfoWindow();			
						
				google.maps.event.addListener(marqueur, 'click', function(event) {
						content = '<div id="container_infowindow">';
						content += '<h4>La Cité de Mirabel Inc.</h4>';
						content += '<p>11 700, rue de l’Avenir, bureau 401<br>Mirabel, Québec, Canada<br>J7J 0G7</p>';
						content += '</div>';
	
						infowindow.setContent(content);
						infowindow.open(carte, marqueur);
				});
}

if($('#contact-map').length){
    LoadGmaps();
}