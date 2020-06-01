import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { Rose as G2Rose, RoseConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface RoseProps extends RoseConfig {
  chartRef?: MutableRefObject<G2Rose | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<RoseProps> = {
  forceFit: true,
  colorField: 'type',
  radiusField: 'value',
  categoryField: 'type'
};

const Rose = forwardRef((props: RoseProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Rose, RoseProps>(G2Rose, rest);

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

Rose.defaultProps = deepMix({}, G2Rose.getDefaultOptions(), defaultConfig);

export default Rose;
