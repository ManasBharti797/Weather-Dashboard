# Weather App

A responsive and clean React-based weather application that shows real-time weather details for any city using the OpenWeatherMap API.

## Features

- Search for weather by city
- Displays:
  - Temperature
  - Weather condition (e.g. Clear, Rainy, Cloudy)
  - Humidity
  - Wind speed
- Dynamic background that changes based on the weather condition
- Loading spinner while fetching data
- Responsive glassmorphism design

## Tech Stack

- React (Functional Components with Hooks)
- Axios for API requests
- OpenWeatherMap API
- CSS3 with glassmorphism UI
- Day.js for date formatting
- Tabler Icons for weather icons

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app


```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app


###2. Install dependencies
bash
Copy
Edit
npm install


3. Get your OpenWeatherMap API key
Visit OpenWeatherMap

Sign up and get your API key

Create a file named apikey.js in the src folder:

js
Copy
Edit
// src/apikey.js
export const API_KEY = "your_api_key_here";
Do NOT expose your key in public repos. Consider using environment variables for production.

4. Run the app
bash
Copy
Edit
npm run dev
Your app should now be running at http://localhost:5173

### 5. Project Structure
bash
Copy
Edit
src/
│
├── assets/              # Weather icons and loader
├── components/
│   └── WeatherApp.jsx   # Main weather component
├── apikey.js            # API key (not included in version control)
├── weatherApp.css       # Custom CSS styling
└── main.jsx             # Entry point
