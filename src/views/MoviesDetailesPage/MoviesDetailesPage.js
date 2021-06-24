import React, {Component} from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import { fetchMovieId } from 'services/fetchApi';


//  const MoviesDetailesPage = () => {
//   return (<h1>Это MoviesDetailesPage</h1> )
// }

export default class MoviesDetailesPage extends Component {
    state = {
      films: {},
    };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieId(movieId)
    .then(response => this.setState({ films: response.data }))
    .catch(error => this.setState({ error }))
    //   ;
   }
  //   async componentDidMount() {
  //     const response = await Axios.get(
  //       // 'https://api.themoviedb.org/3/trending/all/day?api_key=7c7852d89a1cbff8e4a803b290e6dbdc',
  //       'https://api.themoviedb.org/3/search/movie?api_key=7c7852d89a1cbff8e4a803b290e6dbdc&language=en-US&page=1&include_adult=false&query=cat'
  //     );
      
  // console.log(response);

  //   //   this.setState({ films: response.data.results });
  //   }
  
    render() {
        // const { match } = this.props;
    
        return (
          <>
            <h1>Это MoviesDetailesPage</h1>
    
             {/* <ul>
              {this.state.films.map(film => (
                <li key={film.id}>
                  <NavLink to=''>{film.title || film.name}</NavLink>
                  {/* <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink> */}
                {/* </li>
              ))}
            </ul>
    
            <Route
              path={`${match.path}/:authorId`}
              render={props => {
                const bookId = Number(props.match.params.authorId);
                const author = this.state.authors.find(({ id }) => id === bookId);
    
                return author && <AuthorBooks {...props} books={author.books} />;
              }}
            />  */}
          </>
        );
      }
}

// export default MoviesDetailesPage