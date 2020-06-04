import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Heatmap as G2Heatmap, HeatmapConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface HeatmapProps extends HeatmapConfig {
  chartRef?: MutableRefObject<G2Heatmap | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<HeatmapProps> = {
  forceFit: true,
  yField: 'value'
};

const Heatmap = forwardRef((props: HeatmapProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Heatmap, HeatmapProps>(G2Heatmap, rest);

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

Heatmap.defaultProps = deepMix({}, G2Heatmap.getDefaultOptions(), defaultConfig);

export default Heatmap;
