import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Histogram as G2Histogram, HistogramConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface HistogramProps extends HistogramConfig {
  chartRef?: MutableRefObject<G2Histogram | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<HistogramProps> = {
  forceFit: true,
  binField: 'value'
};

const Histogram = forwardRef((props: HistogramProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Histogram, HistogramProps>(G2Histogram, rest);

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

Histogram.defaultProps = deepMix({}, G2Histogram.getDefaultOptions(), defaultConfig);

export default Histogram;
