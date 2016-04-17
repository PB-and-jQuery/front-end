// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import ChartBar from './chart-bar';

let data = [
  { candidate: 'John D. Isaacks', votes: 31 },
  { candidate: 'Britton Stanhope Butler', votes: 36 },
  { candidate: 'Lindsey Owings', votes: 33 },
]

let colors = ['#B22222', '#0000CD', '#00fa9a']

const getBar = barData => {
  let { candidate, votes, color } = barData;
  return <ChartBar key={candidate} {...barData}/>
};

const update = () => {
  render((
    <div className="chart" style={{background: '#f0f0f0', padding: 10}}>
      {data.map(getBar)}
    </div>
  ), document.querySelector('.app'));
}

const increasePercent = () => {
  data.forEach((obj, index) => {
    let amount = Math.random() * 5;
    obj.percent += amount;
    obj.color = colors[ index % colors.length ];
  });

  update();
}

let int = setInterval(increasePercent, 300);

setTimeout(() => {
  clearInterval(int);

  let winner = data.sort((a, b) => a > b ? -1 : 1)[0].label;
}, 5000);

increasePercent();