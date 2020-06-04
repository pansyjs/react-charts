import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { StackedBar as G2StackedBar, StackedBarConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface StackedBarProps extends StackedBarConfig {
  chartRef?: MutableRefObject<G2StackedBar | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<StackedBarProps> = {
  forceFit: true,
  yField: 'values'
};

const StackedBar = forwardRef((props: StackedBarProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2StackedBar, StackedBarProps>(G2StackedBar, rest);

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

StackedBar.defaultProps = deepMix({}, G2StackedBar.getDefaultOptions(), defaultConfig);

export default StackedBar;
