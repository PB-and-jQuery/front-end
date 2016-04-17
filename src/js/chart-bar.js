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

import React, { Component, PropTypes } from 'react';

export default class ChartBar extends Component {

  static propTypes = {
    percent: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

  render() {
    let { percent, label, color } = this.props;
    percent = Math.min(percent, 100);
    return (
      <div className="chart-bar" style={{marginTop: 10, marginBottom: 10}}>
        <div className="label">{label}</div>
        <div className="bar" style={{height: 20, width: `${percent}%`, background: color}}></div>
      </div>
    );
  }

}