import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { Scatter as G2Scatter, ScatterConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface WaterfallProps extends ScatterConfig {
  chartRef?: MutableRefObject<G2Scatter | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<WaterfallProps> = {
  yField: 'value',
  forceFit: true
};

const Scatter = forwardRef((props: WaterfallProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Scatter, WaterfallProps>(G2Scatter, rest);

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

Scatter.defaultProps = deepMix({}, G2Scatter.getDefaultOptions(), defaultConfig);

export default Scatter;
