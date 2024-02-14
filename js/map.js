var map = L.map('map').setView([45.261410247202846, -122.69310372195511], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([45.261410247202846, -122.69310372195511]).addTo(map)
		.bindPopup('<b>Canby, OR</b> <br> Fishing Basecamp')
		.openPopup();

// Marker for Necanicum Bay
var marker_NecanicumBay = L.marker([46.07179223854603, -123.93755634733442]).addTo(map)
  .bindPopup('<b>Necanicum Bay, Oregon</b> <br> Clams: softshells, purple varnish');

// Marker for Nehalem Bay
var marker_NehalemBay = L.marker([45.69074481300641, -123.94714994902507]).addTo(map)
  .bindPopup('<b>Nehalem Bay, Oregon</b> <br> Clams: softshells, purple varnish');

// Marker for Tillamook Bay
var marker_TillamookBay = L.marker([45.53776985044865, -123.93341704098397]).addTo(map)
  .bindPopup('<b>Tillamook Bay, Oregon</b> <br> Clams: gapers, butters, cockles, littlenecks, softshells, purple varnish');

// Marker for Netarts Bay
var marker_NetartsBay = L.marker([45.03957596705829, -123.95515051826172]).addTo(map)
  .bindPopup('<b>Netarts Bay, Oregon</b> <br> Clams: gapers, butters, cockles, littlenecks, softshells, purple varnish');

// Marker for Siletz Bay
var marker_SiletzBay = L.marker([44.9013806790144, -123.959716796875]).addTo(map)
  .bindPopup('<b>Siletz Bay, Oregon</b> <br> Clams: softshells, purple varnish');

// Marker for Yaquina Bay
var marker_YaquinaBay = L.marker([44.60646292054408, -124.06524658203125]).addTo(map)
  .bindPopup('<b>Yaquina Bay, Oregon</b> <br> Clams: gapers, butters, cockles, littlenecks, softshells, purple varnish')
  .openPopup();

// Marker for Alsea Bay
var marker_AlseaBay = L.marker([44.59538258465311, -124.08680725097656]).addTo(map)
  .bindPopup('<b>Alsea Bay, Oregon</b> <br> Clams: cockles, softshells, purple varnish');

// Marker for Siuslaw Bay
var marker_SiuslawBay = L.marker([43.92583053527726, -124.09054565429688]).addTo(map)
  .bindPopup('<b>Siuslaw Bay, Oregon</b> <br> Clams: gapers, cockles, softshells');

// Marker for Umpqua River (mouth)
var marker_UmpquaRiver = L.marker([43.682644051205356, -124.20057678222656]).addTo(map)
  .bindPopup('<b>Umpqua River (mouth), Oregon</b> <br> Clams: gapers, softshells');

// Marker for Coos Bay
var marker_CoosBay = L.marker([43.3405505810812, -124.35005993652344]).addTo(map)
  .bindPopup('<b>Coos Bay, Oregon</b> <br> Clams: gapers, butters, cockles, littlenecks, softshells');

// Marker for Coquille River (mouth)
var marker_CoquilleRiver = L.marker([43.10077204506709, -124.39533081054688]).addTo(map)
  .bindPopup('<b>Coquille River (mouth), Oregon</b> <br> Clams: softshells');

// Marker for Alsea River (mouth)
var marker_AlseaRiver_Steelhead = L.marker([44.371168736745034, -123.80699377300026]).addTo(map)
  .bindPopup('<b>Alsea River, Oregon</b> <br> Steelhead peak season: Jan, Feb, Mar')
  .openPopup();