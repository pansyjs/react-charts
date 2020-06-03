import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { GroupedColumn as G2GroupedColumn, GroupedColumnConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface ColumnProps extends GroupedColumnConfig {
  chartRef?: MutableRefObject<G2GroupedColumn | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<ColumnProps> = {
  forceFit: true,
  yField: 'value'
};

const GroupedColumn = forwardRef((props: ColumnProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2GroupedColumn, ColumnProps>(G2GroupedColumn, rest);

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

GroupedColumn.defaultProps = deepMix({}, G2GroupedColumn.getDefaultOptions(), defaultConfig);

export default GroupedColumn;
