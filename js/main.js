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

//grabs api from the server with api key from options object
fetch('https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1', options)
	.then(response => response.json()) //turns response to JSON
	.then(response => console.log(response)) //prints response to console
	.catch(err => console.error(err));//if error, prints error to console


//array that will contain ages 
const agesArr = [];

//loop that creates ages 16-100 for the ages list options
for (let i = 16; i < 101; i++) {
	agesArr.push(i);
}

//Confirms loop is pushing ages to the array
console.log(agesArr);

//loops through the ages array
agesArr.forEach(e => {
	//for each age element, grabs the datalist from the Dom, creates a new child option with the text + value of age as params
	document.getElementById('ages').appendChild(new Option(e, e));
})

//TODO: make an input that takes a user's height (cm)

//TODO: create an input that accepts a user's weight (kg)

//TODO: create an input that allows a user to select the radio button that corresponds to their activity level

//TODO: create an input that allows a user to select the radio button that corresponds to their goal. 

//TODO: Display responses from server on the page