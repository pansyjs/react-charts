import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { TinyColumn as G2TinyColumn, TinyColumnConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface TinyColumnProps extends TinyColumnConfig {
  chartRef?: MutableRefObject<G2TinyColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<TinyColumnProps> = {
  yField: 'value',
  forceFit: true
};

const TinyColumn = forwardRef((props: TinyColumnProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2TinyColumn, TinyColumnProps>(G2TinyColumn, rest);

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

TinyColumn.defaultProps = deepMix({}, G2TinyColumn.getDefaultOptions(), defaultConfig);

export default TinyColumn;
