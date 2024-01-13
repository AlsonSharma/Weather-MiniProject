# WeatherApp

WeatherApp is a React-based web application that provides real-time weather information for a specified city. It leverages the OpenWeatherMap API to fetch weather data and offers a user-friendly interface for users to explore weather conditions.

## Key Features

- **Search Box:**
  - Input the city name to retrieve weather information.
  - Material-UI components for a visually appealing design.
  - Handles errors gracefully and notifies users when a place doesn't exist.

- **InfoBox:**
  - Displays dynamic weather information, including temperature, humidity, and descriptive details.
  - Changes background image and icon based on weather conditions for visual representation.

- **WeatherApp Container:**
  - Centralized container managing state and combining SearchBox and InfoBox components.

## Technologies Used

- **React:** JavaScript library for building the user interface.
- **Material-UI:** React UI framework for visually appealing components.
- **OpenWeatherMap API:** External API for fetching real-time weather data.

## How to Use

1. Enter the name of a city in the search box.
2. Click the "Search" button to retrieve weather information.
3. View updated information in the InfoBox, including temperature, humidity, and other details.

## Setup

Ensure you have the necessary environment variables i.e API_URL AND API_KEY set in the project's `.env` file:

