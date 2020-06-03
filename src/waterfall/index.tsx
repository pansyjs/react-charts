import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { Waterfall as G2Waterfall, WaterfallConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface WaterfallProps extends WaterfallConfig {
  chartRef?: MutableRefObject<G2Waterfall | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<WaterfallProps> = {
  yField: 'value',
  forceFit: true
};

const Waterfall = forwardRef((props: WaterfallProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Waterfall, WaterfallProps>(G2Waterfall, rest);

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

Waterfall.defaultProps = deepMix({}, G2Waterfall.getDefaultOptions(), defaultConfig);

export default Waterfall;
