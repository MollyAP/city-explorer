import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ResultContainer = ({ location, mapUrl }) => {
  return (
    <div className="result-container mt-3">
      <h3 className="result-title">Welcome to lovely {location.displayName}!</h3>
      <Row>
        <Col>
          <h4 className="result-subtitle">Latitude:</h4>
          <p className="result-text">{location.lat}</p>
        </Col>
        <Col>
          <h4 className="result-subtitle">Longitude:</h4>
          <p className="result-text">{location.lon}</p>
        </Col>
      </Row>
      {mapUrl !== '' && (
        <div className="result-container mt-3">
          <img className="result-map-image" src={mapUrl} alt="Map of city" />
        </div>
      )}
    </div>
  );
};

export default ResultContainer;
