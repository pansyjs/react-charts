import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { TinyLine as G2TinyLine, TinyLineConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface TinyLineProps extends TinyLineConfig {
  chartRef?: MutableRefObject<G2TinyLine | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<TinyLineProps> = {
  yField: 'value',
  forceFit: true
};

const TinyLine = forwardRef((props: TinyLineProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2TinyLine, TinyLineProps>(G2TinyLine, rest);

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

TinyLine.defaultProps = deepMix({}, G2TinyLine.getDefaultOptions(), defaultConfig);

export default TinyLine;
