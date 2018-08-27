import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie';
import Moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const Pie = ({ data }) => (
  <div style={{ height: 500 }}>
    <ResponsivePie
      data={data}
      margin={{
        top: 40,
        right: 80,
        bottom: 80,
        left: 80,
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors="nivo"
      colorBy="id"
      borderWidth={1}
      isInteractive={false}
      borderColor="inherit:darker(0.2)"
      radialLabel={function (e) { return `${e.id}: ${moment.duration(e.value, 'seconds').format('hh:mm:ss', { trim: false })}`; }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor="inherit"
      enableSlicesLabels={false}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate
      motionStiffness={90}
      motionDamping={15}
      theme={{
        tooltip: {
          container: {
            fontSize: '13px',
          },
        },
        labels: {
          textColor: '#555',
        },
      }}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          symbolSize: 18,
          symbolShape: 'circle',
        },
      ]}
    />
  </div>
);

Pie.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Pie;
