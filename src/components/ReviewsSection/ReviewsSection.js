import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OnLoader from 'components/OnLoader';
import { fetchReviewsId } from 'services/fetchApi';
import { makeId } from 'components/slugId';

export class ReviewsSection extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = {
    reviews: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    fetchReviewsId(makeId(movieId))
      .then(response =>
        this.setState({ reviews: response.data.results, isLoading: false }),
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {this.state.isLoading && <OnLoader />}
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    );
  }
}

export default ReviewsSection;
