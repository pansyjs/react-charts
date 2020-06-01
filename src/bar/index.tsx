import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Bar as G2Bar, BarConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface LineProps extends BarConfig {
  chartRef?: MutableRefObject<G2Bar | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<LineProps> = {
  forceFit: true,
  yField: 'value'
};

const Bar = forwardRef((props: LineProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Bar, LineProps>(G2Bar, rest);

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

Bar.defaultProps = deepMix({}, G2Bar.getDefaultOptions(), defaultConfig);

export default Bar;
