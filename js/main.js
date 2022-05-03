//API key hidden in untracked file
const key = config.MY_API_TOKEN;

//connects to the server with the key variable
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
		'X-RapidAPI-Key': key
	}
};

//array containing ages 
const agesArr = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

//loop through the ages array and append an option to the dom for each element.
agesArr.forEach(e => {
	//grabs ages datalist from the Dom, appends a child of a new option with the text + value of e
	document.getElementById('ages').appendChild(new Option(e, e));
})

fetch('https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
