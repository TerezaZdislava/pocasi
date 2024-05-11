import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import WeatherCard from './components/WeatherCard';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { cities } from './citiesData';
import Stack from '@mui/material/Stack';

export type WeatherData = {
  windSpeed: number;
  temp: number;
  feelsLike: number;
  pressure: number;
  summary: string;
  weather: string;
};

function Weather() {
  const [data, setData] = useState<WeatherData>({
    windSpeed: 0,
    temp: 0,
    feelsLike: 0,
    pressure: 0,
    summary: '',
    weather: '',
  });
  const [city, setCity] = useState<string | null>(cities[0]);

  useEffect(() => {
    axios
      .get(`/search?queryStr=${city}`)
      .then((response) => setData(response.data));
  }, [city]);

  return (
    <Container maxWidth="sm">
      <Stack mt={7}>
        <h1>Weather today</h1>
        <Stack mt={2} mb={5}>
          <Autocomplete
            value={city}
            inputValue={city ?? undefined}
            onInputChange={(event, newInputValue: string | null) => {
              setCity(newInputValue);
            }}
            id="autocomplete-cities"
            options={cities}
            sx={{ maxWidth: 300, minWidth: 120, border: 'none' }}
            renderInput={(params) => (
              <TextField {...params} label="City" variant="standard" />
            )}
          />
        </Stack>
        <WeatherCard data={data} />
      </Stack>
    </Container>
  );
}
export default Weather;
