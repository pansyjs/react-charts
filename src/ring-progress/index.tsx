import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { RingProgress as G2RingProgress, RingProgressConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface RingProgressProps extends RingProgressConfig {
  chartRef?: MutableRefObject<G2RingProgress | undefined>;
  style?: CSSProperties;
  className?: string;
}

const RingProgress = forwardRef((props: RingProgressProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2RingProgress, RingProgressConfig>(G2RingProgress, rest);

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

RingProgress.defaultProps = G2RingProgress.getDefaultOptions();

export default RingProgress;
