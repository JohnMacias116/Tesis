
function initMap(){
	const ubicacion = new Localizacion(()=>{
	const myLatLng = {lat: ubicacion.latitude, lng: ubicacion.longitude};
	var texto = '<h1>Ejemplo de marcador</h1>' + '<p>Espero que jale xd </p>'

	const options = {
		center: myLatLng,
		zoom: 14
	}
		var map = document.getElementById('map');

		const mapa = new google.maps.Map(map, options);
		const marcador = new google.maps.Marker({
			position: myLatLng,
			map: mapa,
			title: "espero que jale x2 xd"
		});
		var informacion = new google.maps.InfoWindow({
			content: texto
		});

		marcador.addListener('click', function(){
			informacion.open(mapa, marcador);
		})
	});

}