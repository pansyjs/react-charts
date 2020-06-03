import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Line as G2Line, LineConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface LineProps extends LineConfig {
  chartRef?: MutableRefObject<G2Line | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<LineProps> = {
  forceFit: true,
  yField: 'value'
};

const Line = forwardRef((props: LineProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Line, LineProps>(G2Line, rest);

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

Line.defaultProps = deepMix({}, G2Line.getDefaultOptions(), defaultConfig);

export default Line;
