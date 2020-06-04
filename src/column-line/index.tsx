import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { ColumnLine as G2ColumnLine, ColumnLineConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface DualLineProps extends ColumnLineConfig {
  chartRef?: MutableRefObject<G2ColumnLine | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<DualLineProps> = {
  forceFit: true
};

const ColumnLine = forwardRef((props: DualLineProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2ColumnLine, DualLineProps>(G2ColumnLine, rest);

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

ColumnLine.defaultProps = deepMix({}, G2ColumnLine.getDefaultOptions(), defaultConfig);

export default ColumnLine;
