import React, { Component } from 'react';

import { fetchReviewsId } from 'services/fetchApi';

export class ReviewsSection extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchReviewsId(movieId)
      .then(response => this.setState({ reviews: response.data.results }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
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
