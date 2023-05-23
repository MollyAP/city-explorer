import React from 'react';
import { Card, Table } from 'react-bootstrap';

const WeatherDay = ({ date, description }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
    </tr>
  );
};

const Weather = ({ forecastData }) => {
  console.log(forecastData);

  return (
    <div className="weather-container">
      <h2>Weather Forecast</h2>
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {forecastData.map((forecast, index) => (
                <WeatherDay
                  key={index}
                  date={forecast.date}
                  description={forecast.description}
                />
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Weather;