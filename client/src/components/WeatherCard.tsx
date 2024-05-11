import Card from '@mui/material/Card';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import React from 'react';
import { WeatherData } from '../Weather';

const Temperature = styled.span`
  font-size: 35px;
  color: black;
  font-weight: 500;
`;

const FeelsLikeTemp = styled.span`
  font-size: 18px;
  color: grey;
  font-weight: 500;
`;

const Sky = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 500;
`;

const Summary = styled.span`
  font-size: 16px;
  color: black;
`;

function WeatherCard(data: { data: WeatherData }) {
  return (
    <Card>
      <Stack spacing={4} p={3}>
        <Stack spacing={1}>
          <Temperature>{data.data.temp} °C</Temperature>
          <FeelsLikeTemp>Feels like: {data.data.feelsLike} °C</FeelsLikeTemp>
          <Sky>{data.data.weather}</Sky>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Stack>
            <span>Wind speed: </span>
            <span>{data.data.windSpeed} m/s</span>
          </Stack>
          <Stack>
            <span>Pressure: </span>
            <span>{data.data.pressure} hPa</span>
          </Stack>
        </Stack>
        <Summary>{data.data.summary}.</Summary>
      </Stack>
    </Card>
  );
}

export default WeatherCard;
