import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Column as G2Column, ColumnConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface ColumnProps extends ColumnConfig {
  chartRef?: MutableRefObject<G2Column | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<ColumnProps> = {
  forceFit: true,
  yField: 'value'
};

const Column = forwardRef((props: ColumnProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Column, ColumnProps>(G2Column, rest);

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

Column.defaultProps = deepMix({}, G2Column.getDefaultOptions(), defaultConfig);

export default Column;
