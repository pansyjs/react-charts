import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { GroupedColumnLine as G2GroupedColumnLine, GroupedColumnLineConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface DualLineProps extends GroupedColumnLineConfig {
  chartRef?: MutableRefObject<G2GroupedColumnLine | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<DualLineProps> = {
  forceFit: true
};

const GroupedColumnLine = forwardRef((props: DualLineProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2GroupedColumnLine, DualLineProps>(
    G2GroupedColumnLine,
    rest
  );

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

GroupedColumnLine.defaultProps = deepMix(
  {},
  G2GroupedColumnLine.getDefaultOptions(),
  defaultConfig
);

export default GroupedColumnLine;
