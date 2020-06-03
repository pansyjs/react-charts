import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import {
  PercentStackedColumn as G2PercentStackedColumn,
  PercentStackedColumnConfig
} from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface PercentStackedColumnProps extends PercentStackedColumnConfig {
  chartRef?: MutableRefObject<G2PercentStackedColumn | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<PercentStackedColumnProps> = {
  forceFit: true,
  yField: 'value'
};

const PercentStackedColumn = forwardRef((props: PercentStackedColumnProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2PercentStackedColumn, PercentStackedColumnProps>(
    G2PercentStackedColumn,
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

PercentStackedColumn.defaultProps = deepMix(
  {},
  G2PercentStackedColumn.getDefaultOptions(),
  defaultConfig
);

export default PercentStackedColumn;
