import React, {Component} from 'react';

import { NavLink, } from 'react-router-dom';

import { fetchTrendingDayMovie } from 'services/fetchApi';

export default class HomePage extends Component {
    state = {
      films: [],
    };
    
    componentDidMount() {
      fetchTrendingDayMovie()
      .then(response => this.setState({ films: response.data.results }))
      .catch(error => this.setState({ error }));
     }
  
    render() {
       
    
        return (
          <>
            <h1>Trending today</h1>
    
             <ul>
              {this.state.films.map(film => (
                <li key={film.id}>
                  <NavLink to={`/movies/${film.id}`}>{film.title || film.name}</NavLink>
                
                </li>
              ))}
            </ul>
    
           </>
        );
      }
}