import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { StackedColumnLine as G2StackedColumnLine, StackedColumnLineConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface StackedColumnLineProps extends StackedColumnLineConfig {
  chartRef?: MutableRefObject<G2StackedColumnLine | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<StackedColumnLineProps> = {
  forceFit: true
};

const StackedColumnLine = forwardRef((props: StackedColumnLineProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2StackedColumnLine, StackedColumnLineProps>(
    G2StackedColumnLine,
    rest
  );

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

StackedColumnLine.defaultProps = deepMix(
  {},
  G2StackedColumnLine.getDefaultOptions(),
  defaultConfig
);

export default StackedColumnLine;
