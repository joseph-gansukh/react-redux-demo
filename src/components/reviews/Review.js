// import React, { Component } from 'react';

// class Review extends Component {

//   handleOnClick = () => {
//     this.props.deleteReview(this.props.review.id)
//   }

//   render() {
//     return (
//       <div> 
//         <li style={{display: 'list-item', marginRight: '5px'}}>
//           {this.props.review.text}
//         </li>
//         <button onClick={this.handleOnClick} style={{display: 'inline-block'}}> x </button>
//       </div>
//     );
//   }

// };

// export default Review;

import React from 'react'

function Review({review, deleteReview}) {
  return (
    <div>
      <li style={{display: 'list-item', marginRight: '5px'}}>
          {review.text}
        </li>
       <button onClick={() => deleteReview(review.id)} style={{display: 'inline-block'}}> x </button> 
    </div>
  )
}

export default Review
