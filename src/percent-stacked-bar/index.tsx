import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { PercentStackedBar as G2PercentStackedBar, PercentStackedBarConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface PercentStackedBarProps extends PercentStackedBarConfig {
  chartRef?: MutableRefObject<G2PercentStackedBar | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<PercentStackedBarProps> = {
  forceFit: true,
  yField: 'value'
};

const PercentStackedBar = forwardRef((props: PercentStackedBarProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2PercentStackedBar, PercentStackedBarProps>(
    G2PercentStackedBar,
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

PercentStackedBar.defaultProps = deepMix(
  {},
  G2PercentStackedBar.getDefaultOptions(),
  defaultConfig
);

export default PercentStackedBar;
