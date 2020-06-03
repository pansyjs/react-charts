import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { TinyArea as G2TinyArea, TinyAreaConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface TinyAreaProps extends TinyAreaConfig {
  chartRef?: MutableRefObject<G2TinyArea | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<TinyAreaProps> = {
  yField: 'value',
  forceFit: true
};

const TinyArea = forwardRef((props: TinyAreaProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2TinyArea, TinyAreaProps>(G2TinyArea, rest);

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

TinyArea.defaultProps = deepMix({}, G2TinyArea.getDefaultOptions(), defaultConfig);

export default TinyArea;
