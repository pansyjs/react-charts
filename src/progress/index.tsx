import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Progress as G2Progress, ProgressConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface ProgressProps extends ProgressConfig {
  chartRef?: MutableRefObject<G2Progress | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<ProgressProps> = {};

const Progress = forwardRef((props: ProgressProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Progress, ProgressProps>(G2Progress, rest);

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

Progress.defaultProps = deepMix({}, G2Progress.getDefaultOptions(), defaultConfig);

export default Progress;
