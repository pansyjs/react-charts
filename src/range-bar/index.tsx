import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { RangeBar as G2RangeBar, RangeBarConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface RangeBarProps extends RangeBarConfig {
  chartRef?: MutableRefObject<G2RangeBar | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<RangeBarProps> = {
  forceFit: true,
  yField: 'values'
};

const RangeBar = forwardRef((props: RangeBarProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2RangeBar, RangeBarProps>(G2RangeBar, rest);

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

RangeBar.defaultProps = deepMix({}, G2RangeBar.getDefaultOptions(), defaultConfig);

export default RangeBar;
