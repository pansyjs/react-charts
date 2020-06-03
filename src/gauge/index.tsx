import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Gauge as G2Gauge, GaugeConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface GaugeProps extends GaugeConfig {
  chartRef?: MutableRefObject<G2Gauge | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<GaugeProps> = {
  forceFit: true,
  yField: 'value'
};

const Gauge = forwardRef((props: GaugeProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Gauge, GaugeProps>(G2Gauge, rest);

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

Gauge.defaultProps = deepMix({}, G2Gauge.getDefaultOptions(), defaultConfig);

export default Gauge;
