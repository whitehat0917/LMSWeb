/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Chart } from 'react-charts';
import { get } from 'lodash';

import chartConfig from './chartConfig';
import ResizableBox from './ResizableBox';
import { statsMenu } from '@layout/admin/MenuOptions';
import styles from './StatsChart.module.scss';

const StatsChart = ({ filterValue }) => {
  const [seriesValue, setSeries] = useState(0);
  useEffect(() => {
    setSeries(parseInt(filterValue));
  }, [filterValue]);
  const { data, primaryAxisShow, secondaryAxisShow } = chartConfig({
    series: seriesValue,
    datums: 1,
    dataType: 'linear',
    show: ['primaryAxisShow', 'secondaryAxisShow'],
    barPercentage: 0,
    barThickness: 20,
  });
  const series = React.useMemo(
    () => ({
      type: 'bar',
    }),
    []
  );
  const options = {
    scales: {
      xAxes: [
        {
          categoryPercentage: 0.4,
          barPercentage: 0.4,
        },
      ],
    },
  };

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: 'ordinal',
        position: 'bottom',
      },
      {
        position: 'left',
        type: 'linear',
        stacked: false,
        show: secondaryAxisShow,
      },
    ],
    [primaryAxisShow, secondaryAxisShow]
  );

  const getSeriesStyle = (series) => {
    const dataValue = get(series, 'originalSeries.data[0].secondary', 0);
    return {
      color: dataValue > 400 ? '#147AD6' : '#7388A95A',
    };
  };
  return (
    <Tabs>
      <TabList className={styles.scrollable}>
        <Tab>New registrations</Tab>
        <Tab>Revenue</Tab>
        <Tab>Events Attended</Tab>
        {statsMenu.map((item, index) => (
          <Tab key={`tab-id-${index}`}>{item.title}</Tab>
        ))}
      </TabList>

      <TabPanel>
        <ResizableBox>
          <Chart
            data={data}
            series={series}
            axes={axes}
            options={options}
            {...options}
            getSeriesStyle={getSeriesStyle}
          />
        </ResizableBox>
      </TabPanel>
      <TabPanel>
        <ResizableBox>
          <Chart
            data={data}
            series={series}
            axes={axes}
            getSeriesStyle={getSeriesStyle}
          />
        </ResizableBox>
      </TabPanel>
      <TabPanel>
        <ResizableBox>
          <Chart
            data={data}
            series={series}
            axes={axes}
            getSeriesStyle={getSeriesStyle}
          />
        </ResizableBox>
      </TabPanel>
      <TabPanel>
        <ResizableBox>
          <Chart
            data={data}
            series={series}
            axes={axes}
            getSeriesStyle={getSeriesStyle}
          />
        </ResizableBox>
      </TabPanel>
      <TabPanel>
        <ResizableBox>
          <Chart
            data={data}
            series={series}
            axes={axes}
            getSeriesStyle={getSeriesStyle}
          />
        </ResizableBox>
      </TabPanel>
    </Tabs>
  );
};

export default StatsChart;
