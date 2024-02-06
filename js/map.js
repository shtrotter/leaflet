var map = L.map('map').setView([45.261410247202846, -122.69310372195511], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([45.261410247202846, -122.69310372195511]).addTo(map)
		.bindPopup('Canby, OR <br> Northwest Fishing Basecamp')
		.openPopup();	