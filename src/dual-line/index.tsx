import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { DualLine as G2DualLine, DualLineConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface DualLineProps extends DualLineConfig {
  chartRef?: MutableRefObject<G2DualLine | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<DualLineProps> = {
  forceFit: true
};

const DualLine = forwardRef((props: DualLineProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2DualLine, DualLineProps>(G2DualLine, rest);

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

DualLine.defaultProps = deepMix({}, G2DualLine.getDefaultOptions(), defaultConfig);

export default DualLine;
