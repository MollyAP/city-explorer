import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Movie = ({ movieData }) => {
    console.log(movieData)
  return (
    <div className="movie-container">
      <h2>Movie Forecast</h2>
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Overview</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              {movieData.map((movie, index) => (
                <tr key={index}>
                  <td>{movie.title}</td>
                  <td>{movie.overview}</td>
                  <td>{movie.releaseDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
