const key = config.MY_API_TOKEN;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
		'X-RapidAPI-Key': key
	}
};

fetch('https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));