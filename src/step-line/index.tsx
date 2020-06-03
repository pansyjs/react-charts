import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { StepLine as G2StepLine, StepLineConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface StepLineProps extends StepLineConfig {
  chartRef?: MutableRefObject<G2StepLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<StepLineProps> = {
  yField: 'value',
  forceFit: true
};

const StepLine = forwardRef((props: StepLineProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2StepLine, StepLineProps>(G2StepLine, rest);

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

StepLine.defaultProps = deepMix({}, G2StepLine.getDefaultOptions(), defaultConfig);

export default StepLine;
