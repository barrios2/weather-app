# Weathery

Weather app built with vanilla JavaScript. This is a project for HackYourFuture corresponding to the APIs module.
This app shows current weather and other information once the user has entered a valid city name, otherwise it will show an error message.

## Demo

The deployed version of this app is available [**here**](https://barrios2.github.io/weather-app/)

## Structure

```
├── public
│ └── style.css
├── src
│ ├── pages
│ │ └── startPage.js
│ ├── views
│ │ ├── additionalTemperatureView.js
│ │ ├── errorMessageView.js
│ │ ├── searchView.js
│ │ └── temperatureView.js
│ ├── app.js
│ └── constants.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## Features

- Search bar to look for a city by its name
- User can check the current weather, weather condition, humidity and real temperature sensation
- Weather icon changes according to the weather condition
- App shows an error to user when entering an invalid city name or no name at all
- App is responsive

## Author

[**_Fressia Barrios_**](https://github.com/barrios2)
