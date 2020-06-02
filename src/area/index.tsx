import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Area as G2Area, AreaConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface AreaProps extends AreaConfig {
  chartRef?: MutableRefObject<G2Area | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<AreaProps> = {
  forceFit: true,
  yField: 'value'
};

const Area = forwardRef((props: AreaProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Area, AreaProps>(G2Area, rest);

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

Area.defaultProps = deepMix({}, G2Area.getDefaultOptions(), defaultConfig);

export default Area;
