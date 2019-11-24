import React from 'react';

export default class PlaceholderImage extends React.Component {
  render() {
    const { width, height } = this.props;
    return (
      <svg width={width} height={height} style={{ display: 'inline' }}>
        <rect
          width="100%"
          height="100%"
          style={{
            fill: '#eee',
            strokeWidth: 1,
            stroke: 'gray'
          }}
        />
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          style={{ stroke: 'lightgray', strokeWidth: 1 }}
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          style={{ stroke: 'lightgray', strokeWidth: 1 }}
        />
        <text
          alignmentBaseline="middle"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ stroke: 'lightgray', fill: 'lightgray' }}
        >
          {width} x {height}
        </text>
        <text />
      </svg>
    );
  }
}
