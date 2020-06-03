import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { Radar as G2Radar, RadarConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface RadarProps extends RadarConfig {
  chartRef?: MutableRefObject<G2Radar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<RadarProps> = {
  forceFit: true,
  radiusField: 'value'
};

const Radar = forwardRef((props: RadarProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Radar, RadarProps>(G2Radar, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  useImperativeHandle(ref, () => ({
    getChart: () => chart.current
  }));

  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

Radar.defaultProps = deepMix({}, G2Radar.getDefaultOptions(), defaultConfig);

export default Radar;
