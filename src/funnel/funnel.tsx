import React, { MutableRefObject, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Funnel as G2Funnel, FunnelConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface FunnelProps extends FunnelConfig {
  chartRef?: MutableRefObject<G2Funnel | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const Funnel = forwardRef((props: FunnelProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2Funnel, FunnelProps>(G2Funnel, rest);

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

export default Funnel;
