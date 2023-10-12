# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Stock Dashboard App

This project is a stock dashboard app that uses the [Finnhub API](https://finnhub.io/)

## Tech Stack

<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

🔍 Search for a stock (e.g. AAPL, FB, GOOG)

💸 Quote a stock (current price, percent change)

📝 Get more details of a stock (name, currency, market cap, etc.)

📈 View historical chart data of a stock

🌙 Select theme (dark/light)



| Description                            	|
|----------------------------------------	|
| Introduction                           	|
| Setup (TailwindCSS, Google Fonts, ...) 	|
| Grid Layout                            	|
| React Components & Styling             	|
| Recharts (Plotting Data)               	|
| Dark Mode (React Context)              	|
| Fetching Data from REST API (Finnhub)  	|
| Transitions & Animations               	|


## Chart.js
 This file defines a React component for displaying a financial chart. It uses the Recharts library to create an area chart that shows historical stock data. The component fetches historical data from an API based on the selected time range and displays it as a chart.

## Card.js
 This file defines a reusable React component called "Card." It's a styled container component that can be used to wrap and present various types of content. The component's appearance can be customized based on the application's theme (light or dark).

## ChartFilter.js
 This file defines a React component for filtering the time range of the financial chart. It displays buttons that allow the user to select different time intervals (e.g., 1D, 1W, 1M, 1Y) for the chart. When a button is clicked, it updates the chart to show data for the selected time period.

## Dashboard.js
 This file defines the main dashboard of your application. It combines various components, including the header, chart, overview, and additional widgets like the clock, weather, and calendar. It uses context to manage the theme (dark or light) and the selected stock symbol.

## Details.js
 This file defines a React component for displaying details about a selected stock. It presents information such as the stock name, country, currency, exchange, IPO date, market capitalization, and industry. The details are styled within a "Card" component.

## Header.js
 This file defines a header component for the application. It displays the name of the selected stock and provides a search input field for users to search for other stocks.

## Overview.js
 This component displays an overview of the selected stock, including its symbol, current price, price change, and change percentage. It's styled using the "Card" component.

## Search.js
 This component is used for searching stocks. It provides an input field for entering a stock symbol or company name and a search button. Users can enter a query, press Enter, or click the search button to find information about a specific stock.

## ThemeIcon.js
 This component allows users to toggle between dark and light themes. It displays a moon icon, and when clicked, it toggles the theme of the application.

## StockContext.js
 This file defines a context for managing the selected stock symbol. It's used to share the selected stock symbol among various components.

## ThemeContext.js
 This file defines a context for managing the theme (dark or light) of the application. It's used to share the theme setting among various components.

## App.js
 This is the main file of the React application. It sets up context providers for theme and stock symbol, and it defines the structure of the entire application. It's the entry point of your application.

## index.js
 This file is used for rendering the React application into the root HTML element. It wraps the app in a React.StrictMode component and mounts it to the DOM.

## Weather App using React JS
Here we get the current Weather data using API from OpenWeatherMap and display the weather information like Temperature, Weather condition, Humidity and Wind Speed according to the city in this Weather app.

## Real-time Weather Updates:
 The Weather App delivers real-time weather information, including temperature, humidity, wind speed, and direction, as well as atmospheric pressure. Users can instantly check the current conditions for their location.

## HIGHTLIGHTS

▪ Current weather for a location per instance 

▪ Various measurement systems

▪ Automatic or manual "Refresh"

▪ Current temperature
 
▪ Atmospheric pressure

▪ Humidity

▪ Visibility

▪ Wind speed

▪ Cloud cover

## WeatherApp.js
 This file defines a React component for a weather application. It allows users to search for weather information for a specific location. It fetches weather data from an API based on the user's input and displays details like temperature, location, humidity, and wind speed. It also displays weather icons based on the weather conditions.


## Clock App using React JS

A ClockApp built with React.js is a simple and elegant web application that displays a real-time clock. It utilizes the popular React.js library to create a dynamic and responsive user interface, allowing users to view the current time and, in some cases, customize the clock's appearance or time zone. 

 ## Clock.js
  This file defines a React component for a digital clock that displays the current time, including hours, minutes, and seconds. It uses various utility functions to format the time and is styled with CSS classes for the clock display. It's part of the clock feature of your application.