import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { deepMix } from '@antv/util';
import { Treemap as G2Treemap, TreemapConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface TreemapProps extends TreemapConfig {
  chartRef?: MutableRefObject<G2Treemap | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<TreemapProps> = {
  colorField: 'type',
  forceFit: true
};

const Treemap = forwardRef((props: TreemapProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Treemap, TreemapProps>(G2Treemap, rest);

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

Treemap.defaultProps = deepMix({}, G2Treemap.getDefaultOptions(), defaultConfig);

export default Treemap;
