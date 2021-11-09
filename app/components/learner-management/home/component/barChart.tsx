import React from 'react';
import Chart from 'react-google-charts';

const BarChart = ({ info }) => {
  return (
    <Chart
      width="100%"
      height={'300px'}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={info}
      options={{
        colors: ['#CDD5E1'],
        legend: { position: 'none' },
        hAxis: {
          title: 'Name',
          minValue: 0,
        },
        vAxis: {
          title: 'Value',
        },
        bar: { groupWidth: '30%' },
        isStacked: false,
      }}
      legendToggle={true}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default BarChart;
