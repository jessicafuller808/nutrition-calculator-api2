//API key hidden in untracked file
const key = config.MY_API_TOKEN;

//connects to the api server with the key variable
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
		'X-RapidAPI-Key': key 
	}
};

//Creating array to hold ages for ages datalist
const agesArr = [];

//loop that creates ages 16-100 for the ages list options
for (let i = 16; i < 101; i++) {
	agesArr.push(i);
}

//creating and appending and option for each age with the age as the text and value
agesArr.forEach(e => {
	document.getElementById('ages').appendChild(new Option(e, e));
})

document.getElementById('submit').addEventListener('click', submitData);

function submitData() {
	let age = document.getElementById('age').value;

	fetch(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=male&height=180&weight=70&activitylevel=level_1`, options)
		.then(response => response.json()) //turns response to JSON
		.then(response => console.log(response)) //prints response to console
		.catch(err => console.error(err));//if error, prints error to console
}


//TODO: Create a function where the submit button is clicked, it sends all of the values from the form to the server. These values become variables in the fetch request.

//TODO: Display response from server on the page