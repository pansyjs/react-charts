import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { deepMix } from '@antv/util';
import { Donut as G2Donut, DonutConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface DonutProps extends DonutConfig {
  chartRef?: React.MutableRefObject<G2Donut | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<DonutConfig> = {
  forceFit: false,
  angleField: 'value',
  colorField: 'type'
};

const Donut = forwardRef((props: DonutProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Donut, DonutConfig>(G2Donut, rest);

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

Donut.defaultProps = deepMix({}, G2Donut.getDefaultOptions(), defaultConfig);

export default Donut;
