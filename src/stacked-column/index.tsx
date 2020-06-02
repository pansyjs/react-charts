import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { StackedColumn as G2StackedColumn, StackedColumnConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface StackedColumnProps extends StackedColumnConfig {
  chartRef?: MutableRefObject<G2StackedColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<StackedColumnProps> = {
  forceFit: true
};

const StackedColumn = forwardRef((props: StackedColumnProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2StackedColumn, StackedColumnProps>(G2StackedColumn, rest);

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

StackedColumn.defaultProps = deepMix({}, G2StackedColumn.getDefaultOptions(), defaultConfig);

export default StackedColumn;
