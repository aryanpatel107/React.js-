import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // 1️⃣ Get latitude & longitude
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found.");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2️⃣ Get weather using coordinates
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        name,
        country,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🌤 Weather App</h1>

        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Enter city (e.g., Mumbai)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && getWeather()}
            style={styles.input}
          />
          <button onClick={getWeather} style={styles.button}>
            Search
          </button>
        </div>

        {loading && <p style={styles.loading}>Loading...</p>}
        {error && <p style={styles.error}>{error}</p>}

        {weather && (
          <div style={styles.weatherBox}>
            <h2>
              {weather.name}, {weather.country}
            </h2>
            <p>🌡 Temperature: {weather.temperature}°C</p>
            <p>🌬 Wind Speed: {weather.windspeed} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #3b82f6, #06b6d4)"
  },
  card: {
    background: "#ffffff",
    padding: "50px",
    borderRadius: "20px",
    width: "420px",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
  },
  title: {
    marginBottom: "25px",
    color: "#000000"
  },
  searchBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  button: {
    padding: "12px 18px",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  },
 weatherBox: {
  marginTop: "20px",
  padding: "20px",
  backgroundColor: "#f1f5f9",
  borderRadius: "15px",
  color: "#000000"   
},
  city: {
    color: "#000000",
    marginBottom: "10px"
  },
  text: {
    color: "#000000",
    fontSize: "16px",
    margin: "5px 0"
  },
  error: {
    color: "red",
    fontWeight: "500"
  },
  info: {
    color: "#000000"
  }
};

export default App;