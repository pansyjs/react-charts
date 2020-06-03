import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { RangeColumn as G2RangeColumn, RangeColumnConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface RangeColumnProps extends RangeColumnConfig {
  chartRef?: MutableRefObject<G2RangeColumn | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<RangeColumnProps> = {
  forceFit: true,
  yField: 'values'
};

const RangeColumn = forwardRef((props: RangeColumnProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2RangeColumn, RangeColumnProps>(G2RangeColumn, rest);

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

RangeColumn.defaultProps = deepMix({}, G2RangeColumn.getDefaultOptions(), defaultConfig);

export default RangeColumn;
