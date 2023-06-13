const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e3bf091d66msh8975d6f967f8f1ap15b20djsn274b1dbebda6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));