import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Weather = ({ forecastData }) => {
    console.log(forecastData)
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
                <tr key={index}>
                  <td>{forecast.date}</td>
                  <td>{forecast.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Weather;
