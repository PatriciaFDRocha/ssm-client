import React from 'react';
import StarRatings from 'react-star-ratings';


class Rating extends React.Component {

  state = {
    rating: 0
  }

  changeRating = (rating) => {

    this.setState({
      rating: rating
    });
  }

  render() {
    
    return (
      <StarRatings
        rating={this.state.rating}
        starEmptyColor='white'
        starRatedColor="yellow"
        starDimension='15px'
        changeRating={ this.changeRating }
        name='rating'
      />
    );
  }

}

export default Rating;