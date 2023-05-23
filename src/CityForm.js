import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const CityForm = ({ searchQuery, handleInputChange, getLocation }) => {
  return (
    <div className="form-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Form>
          <Form.Group as={Row} controlId="formSearch">
            <Form.Label className="search-label col-sm-2" column sm={2}>
              Search for a city
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Enter a city"
                value={searchQuery}
                onChange={handleInputChange}
                className="search-input"
              />
            </Col>
            <Col sm={2}>
              <Button variant="primary" onClick={getLocation} className="explore-button">
                Explore!
              </Button>
            </Col>
          </Form.Group>
        </Form>
    </div>
  );
};

export default CityForm;
