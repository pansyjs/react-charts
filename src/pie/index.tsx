import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Pie as G2Pie, PieConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface PieProps extends PieConfig {
  chartRef?: MutableRefObject<G2Pie | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<PieProps> = {
  forceFit: true,
  angleField: 'value'
};

const Pie = forwardRef((props: PieProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Pie, PieProps>(G2Pie, rest);

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

Pie.defaultProps = deepMix({}, G2Pie.getDefaultOptions(), defaultConfig);

export default Pie;
