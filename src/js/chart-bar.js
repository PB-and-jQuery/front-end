// import React, { Component, PropTypes } from 'react';
// import { render } from 'react-dom';

// export default class ChartBar extends Component {
//   static propTypes = {
//     votes: PropTypes.number.isRequired,
//     candidate: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired
//   }

//   render() {
//     let { votes, candidate, color } = this.props;
//     votes = Math.min(votes, 100);
//     return (
//         <div className="chart-bar" style={{marginTop: 10, marginBottom: 10}}>
//         <div className="candidate">{candidate}</div>
//         <div className="bar" style={{height: 20, width: `{votes}`, background: color}}></div>
//       </div>
//     );
//   }
// }

function getColor(party) {
  let map = {
    'republican' : 'red',
    'democrate': 'blue',
    'independent' : 'green'
  }

  return map[ party.toLowerCase() ]
}

import React, { Component, PropTypes } from 'react';

export default class ChartBar extends Component {

  static propTypes = {
    votes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    party: PropTypes.string.isRequired
  }

  render() {
    let { votes, name, party } = this.props;
    // percent = Math.min(percent, 100);
    return (
      <div className="chart-bar" style={{marginTop: 10, marginBottom: 10}}>
        <div className="label">{name}</div>
        <div className="bar" style={{height: 20, width: (votes * 10), background: getColor(party)}}></div>
      </div>
    );
  }

}