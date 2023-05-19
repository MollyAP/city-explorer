import axios from 'axios';
import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import './App.css';
import Weather from "./Weather";
import Movie from "./Movie"

class Explorer extends Component {
  state = {
    searchQuery: '',
    location: { lat: null, lon: null, displayName: null },
    mapUrl: '',
    forecast: [],
    movies: [],
    error: null
  };

  getLocation = async () => {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
      const res = await axios.get(API);
      const { lat, lon, display_name } = res.data[0];

      const weatherAPI = `https://city-explorer-api-2ts6.onrender.com/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.searchQuery}`;
      const weatherRes = await axios.get(weatherAPI);
      // Handle the response from the /weather endpoint
      this.setState({ location: { lat, lon, displayName: display_name }, mapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${lat},${lon}`, forecast: weatherRes.data });

      const movieAPI = `https://city-explorer-api-2ts6.onrender.com/movies?searchQuery=${this.state.searchQuery}`;
      const movieRes = await axios.get(movieAPI);
      this.setState({movies: movieRes.data});

    } catch (error) {
      this.setState({ error })
    }
  };

  render() {
    return (
      <div className="explorer-container mt-5">
        <Form>
          <Form.Group as={Row} controlId="formSearch">
            <Form.Label className="search-label col-sm-2" column sm={2}>
              Search for a city
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Enter a city"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                className="search-input"
              />
            </Col>
            <Col sm={2}>
              <Button variant="primary" onClick={this.getLocation} className="explore-button">
                Explore!
              </Button>
            </Col>
          </Form.Group>
        </Form>

        {this.state.location.lat !== null && this.state.location.lon !== null && (
          <div className="result-container mt-3">
            <h3 className="result-title">Welcome to lovely {this.state.location.displayName}!</h3>
            <Row>
              <Col>
                <h4 className="result-subtitle">Latitude:</h4>
                <p className="result-text">{this.state.location.lat}</p>
              </Col>
              <Col>
                <h4 className="result-subtitle">Longitude:</h4>
                <p className="result-text">{this.state.location.lon}</p>
              </Col>
            </Row>
          </div>
        )}

        {this.state.mapUrl !== '' && (
          <div className="result-container mt-3">
            <img className="result-map-image" src={this.state.mapUrl} alt="Map of city" />
          </div>
        )}

        {this.state.forecast.length !== 0 && (
          <Weather forecastData={this.state.forecast} />
        )}

        {this.state.movies.length !== 0 && (
          <Movie movieData={this.state.movies} />
        )}


        {this.state.error && (
          <div className="alert alert-danger" role="alert">
            <strong>Error {this.state.error.status}: </strong>
            <div class="outer-container">
              <div class="inner-container">
                <p>Sowwy, the page you are looking for does not exist ówò</p>
              </div>
            </div> {this.state.error.message}
          </div>

        )}
      </div>
    );
  }
}

//grr

export default Explorer;
