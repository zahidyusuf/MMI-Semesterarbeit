/**
 * Java Script fuer Karte
 */

	function initialize(){
    		var mapCanvas = document.getElementById('map-canvas');
    		var myLatlng = new google.maps.LatLng(20.220085, 23.444550);
    		var mapOptions = {
    				zoom: 2,
    			    center: myLatlng,
    			    mapTypeId: google.maps.MapTypeId.ROADMAP
    			   }
    		var map = new google.maps.Map(mapCanvas, mapOptions);
    		
    		 var contentString = '<div id="content">'+
    	      '<div id="siteNotice">'+
    	      '</div>'+
    	      '<h1 id="firstHeading" class="firstHeading" style="font-family:Roboto Condensed;text-align:center">Indonesia</h1>'+
    	      '<div id="bodyContent">'+
    	      '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' + 
    	      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
    	      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>'+
    	      '</div>'+
    	      '</div>';
    	      
    	      var infowindow = new google.maps.InfoWindow({
    	    	  content: contentString
    	      });
    	     
    	      var projekt = [
    	      ['Germany',51.487740, 10.234393],               
    	      ['Indonesia',-1.231313, 113.752168],
    	      ['Malaysia',4.841596, 101.861801],   
    	      ['Japan',36.817099, 139.473346],   
    	      ['China',34.639152, 100.796268],   
    	      ['Greece',37.877127, 23.810272],   
    	      ['India',19.648253, 78.340747],   
    	      ['Cameroon',7.042666, 13.399273],   
    	      ['Canada',56.098171, -109.007812],   
    	      ];
    	      
    	      
    		setMarker(map,projekt);
    	      
    	    
    	      
    	
    	}
    	
        function setMarker(map,locations) {
	    	  var image = {
  	    		  url:'icon/marker-red-map.png',
  	     	 };
	    	  
	    	  for(var i = 0; i < locations.length;i++) {
	    		 var projekts = locations[i];	
	    		  var marker = new google.maps.Marker({
	      			position: new google.maps.LatLng(projekts[1],projekts[2]),
	      			map: map,
	      			icon: image,
	      			title : projekts[0]
	      		}); 
	    	  }
	    	  
	          google.maps.event.addListener(marker,'click',function() {
    	    	  infowindow.open(map,marker);
    	    });
	      }
    	google.maps.event.addDomListener(window, 'load', initialize);