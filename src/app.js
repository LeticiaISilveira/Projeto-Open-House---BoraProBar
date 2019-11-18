// age = confirm('Você tem mais de 18 anos?');
// if(age==false){
//     location.href='https://www.minecraft.net/pt-br/'
// }

const platform = new H.service.Platform({
  'app_id': '0EeS3RWEaZacTmZVSe3r',
  'apikey':'QBYz8rewc1RPYVM7jvaL9tGrICvd2vWFS-WVf_rvftI'
  // 'apikey': 'b5q6ZKMFzd0A7Hmp-SWct71ZroHRsXLLl4r5WvJuhVg'

  });

  // Obtain the default map types from the platform object:
const defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
const map = new H.Map(
  document.querySelector('.map-container'),
  defaultLayers.vector.normal.map,
  {
    zoom: 15,
    center: { lat: -23.557562, lng: -46.659315}
  });
//   let onResult = function(result) {
//     let locations = result.Response.View[0].Result,
//       position,
//       marker;
//     // Add a marker for each location found
//     for (i = 0;  i < locations.length; i++) {
//     position = {
//       lat: locations[i].Location.DisplayPosition.Latitude,
//       lng: locations[i].Location.DisplayPosition.Longitude
//     };
//     map.setCenter(position)
//     marker = new H.map.Marker(position);
//     map.addObject(marker);
    
//     }
//   };

// // Get an instance of the geocoding service:
// let geocoder = platform.getGeocodingService();

// // Call the geocode method with the geocoding parameters,
// // the callback and an error callback function (called if a
// // communication error occurs):
// geocoder.geocode(geocodingParams, onResult, function(e) {
//   alert(e);
// });

// Create a marker icon from an image URL:


// let icon = new H.map.Icon("images/beers.png");

// // Create a marker using the previously instantiated icon:
// let barBelaSantos = new H.map.Marker({ lat: -23.556972, lng: -46.662528}, { icon: icon });
// let oMalleys = new H.map.Marker({ lat: -23.557958, lng: -46.665997}, { icon: icon });
// let bellaJau = new H.map.Marker({ lat: -23.556733,  lng: -46.665414}, { icon: icon });
// let meGusta = new H.map.Marker({ lat: -23.559183,  lng: -46.664836}, { icon: icon });
// let orangePoint = new H.map.Marker({ lat: -23.556447,  lng:  -46.663897}, { icon: icon });  
//     // Add the marker to the map:
// // map.addObject([barBelaSantos, oMalleys, bellaJau, meGusta, orangePoint]);
// map.addObject(barBelaSantos);
// map.addObject(oMalleys);
// map.addObject(bellaJau);
// map.addObject(meGusta);
// map.addObject(orangePoint);

// Add map events functionality to the map
const mapEvents = new H.mapevents.MapEvents(map);
// Add behavior to the map: panning, zooming, dragging.
const behavior = new H.mapevents.Behavior(mapEvents);

const ui = H.ui.UI.createDefault(map, defaultLayers);
const markerOne = new H.map.Marker({lat: -23.557562, lng: -46.659315});
markerOne.setData(`<p>Bar do ...</p>`);
markerOne.addEventListener('tap', event =>{ 
  const bubble = new H.ui.UI.InfoBubble(
    event.target.getPosition(),
    {
      content: event.target.getData()
    }
  );
  ui.addBubble(bubble);
}, false);
markerTwo = new H.map.Marker({lat: -23.556447,  lng:  -46.663897});
markerTwo.setData(`<p>Bar do ...</p>`);
markerTwo.addEventListener("tap", event =>{ 
  const bubble = new H.ui.UI.InfoBubble(
    event.target.getPosition(),
    {
      content: event.target.getData()
    }
  );
  ui.addBubble(bubble);
}, false);
map.addObject(markerOne);
map.addObject(markerTwo);


// barBelaSantos = new H.map.Marker ({ lat: -23.556972, lng: -46.662528});
// barBelaSantos.setData(`<p>Bar do ...</p>`);
// barBelaSantos.addEventListener("tap", event =>{ 
//   const bubble = new H.ui.UI.InfoBubble(
//     event.target.getPosition(),
//     {
//       content: event.target.getData()
//     }
//   );
//   ui.addBubble(bubble);
// }, false);
// map.addObject(barBelaSantos);

	const homePage = () => {
	window.location.hash = '';
	const template = `
	<h1>Página inicial sem estar logado</h1>
	${Button({
		title:'ir pro login',
		onclick: mudarprologin
	})}
	${Button({
		title:'ir pro cadastro',
		onclick: mudarprocadastro
	})}`;
	return template;
}

const mudarprologin = () => {
	location.hash = 'login';
}

const mudarprocadastro = () => {
	location.hash = 'register';
}

