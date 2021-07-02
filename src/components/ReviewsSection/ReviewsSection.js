import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import OnLoader from 'components/OnLoader';
import { fetchReviewsId } from 'services/fetchApi';
import { makeId } from 'components/slugId';
import sA from './animationReviews.module.css';

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
      .then(response => this.setState({ reviews: response.data.results }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {this.state.isLoading && <OnLoader />}
        <TransitionGroup component="ul">
          {reviews.length > 0 ? (
            reviews.map(({ author, content, id }) => (
              <CSSTransition key={id} timeout={400} classNames={sA}>
                <li key={id}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </li>
              </CSSTransition>
            ))
          ) : (
            <p>We don't have any reviews for this movie.</p>
          )}
        </TransitionGroup>
      </>
    );
  }
}

export default ReviewsSection;
