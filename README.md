#Weather App - README

#Project Description

This is a simple and responsive weather application built using JavaScript, HTML/CSS, and the OpenWeather API. The app allows users to search for current weather conditions in any city, displaying information such as temperature, humidity, weather description, and an emoji representation of the weather. It features a clean, minimalistic design and dynamically updates the weather data for a seamless user experience.

#Features

	•	Search Functionality: Enter the name of any city to get real-time weather information.
	•	Weather Details: Displays city name, temperature (in Celsius), humidity, and a short weather description.
	•	Dynamic Weather Emojis: Provides an emoji that visually represents the current weather condition.
	•	Error Handling: Displays meaningful error messages for invalid inputs or API issues.
	•	Responsive Design: The interface is styled for usability on both desktop and mobile devices.

#Technologies Used

	•	Frontend: HTML, CSS
	•	Logic: JavaScript
	•	API: OpenWeather API

#How to Use

	1.	Clone or download the repository:

git clone https://github.com/Achraf921/weather-app.git


	2.	Open the IndexW.html file in your browser.
	3.	Enter a city name in the input field and click “Get Weather.”
	4.	View the weather information displayed dynamically on the screen.

#Code Overview

#HTML

The IndexW.html file contains the basic structure of the application, including the input form and a placeholder for weather data. It also links to the CSS for styling and the JavaScript file for functionality.

#CSS

The IndexW.css file provides styling for the app, ensuring a clean and user-friendly design. Key elements include:
	•	Styled input fields and buttons.
	•	A weather card to display data.
	•	Hover effects and shadowing for an interactive design.

#JavaScript

The IndexW.js file contains all the logic for fetching and displaying weather data. Highlights include:
	•	API Integration: Fetches weather data from the OpenWeather API.
	•	Dynamic Content: Updates the DOM with weather details and emojis.
	•	Error Handling: Handles user input validation and fetch errors.

#Preview

When a valid city name is entered, the app displays:
	•	City Name
	•	Temperature (°C)
	•	Humidity (%)
	•	Weather Description
	•	Emoji Representation (e.g., ☀️ for sunny, ❄️ for snow)

#Setup Notes

	•	Ensure you have an active API key from OpenWeather API and update it in the JavaScript file at const apiKey.
	•	The app uses the OpenWeather API, so an internet connection is required.

