// Javascript Entry Point
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import ChartBar from './chart-bar';

// let data = [
//   { candidate: 'John D. Isaacks', votes: 31 },
//   { candidate: 'Britton Stanhope Butler', votes: 36 },
//   { candidate: 'Lindsey Owings', votes: 33 },
// ]

// let colors = ['#B22222', '#0000CD', '#00fa9a']

// const getBar = barData => {
//   let { candidate, votes, color } = barData;
//   return <ChartBar key={candidate} {...barData}/>
// };

// const update = () => {
//   render((
//     <div className="chart" style={{background: '#f0f0f0', padding: 10}}>
//       {data.map(getBar)}
//     </div>
//   ), document.querySelector('.app'));
// }

// const increasePercent = () => {
//   data.forEach((obj, index) => {
//     let amount = Math.random() * 5;
//     obj.percent += amount;
//     obj.color = colors[ index % colors.length ];
//   });

//   update();
// }

// let int = setInterval(increasePercent, 300);

// setTimeout(() => {
//   clearInterval(int);

//   let winner = data.sort((a, b) => a > b ? -1 : 1)[0].label;
// }, 5000);

// increasePercent();

import React, { Component } from 'react';
// import { render } from 'react-dom';
import ChartBar from './chart-bar';


let colors = ['#B22222', '#0000CD', '#00fa9a']

export default class Chart extends Component {

   constructor(...args) {
      super(...args);

      this.state = { 
        data: [
          { label: 'Republican John D. Isaacks', percent: 50, color: 'red' },
          { label: 'Democratic Britton Stanhope Butler', percent: 0, color: 'green' },
          { label: 'Independent Lindsey Owings', percent: 0, color: 'blue' } 
        ]
      }
    }

    componentWillMount() {
      let int = setInterval(() => {
        let {data} = this.state;
        data.forEach((obj, index) => {
          let amount = Math.random() * 5;
          obj.percent += amount;
          obj.color = colors[ index % colors.length ];
        });

        this.setState({data});
      }, 1000);


      setTimeout(() => {
        clearInterval(int);

        let {data} = this.state;

        let winner = data.sort((a, b) => a > b ? -1 : 1)[0].label;
        alert('JD Isaacks is your new Atlanta Mayor!');
      }, 5000);
    }

    getBar(barData) {
      let { label, percent, color } = barData;
      return <ChartBar key={label} {...barData}/>
    }

    render() {
      let { data } = this.state;
      return (
        <div className="chart" style={{background: '#f0f0f0', padding: 10}}>
          {data.map(::this.getBar)}
        </div>
      )
    }

  }