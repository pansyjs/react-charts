import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { GroupedBar as G2GroupedBar, GroupedBarConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface GroupedBarProps extends GroupedBarConfig {
  chartRef?: MutableRefObject<G2GroupedBar | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<GroupedBarProps> = {
  forceFit: true,
  yField: 'value'
};

const GroupedBar = forwardRef((props: GroupedBarProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2GroupedBar, GroupedBarProps>(G2GroupedBar, rest);

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

GroupedBar.defaultProps = deepMix({}, G2GroupedBar.getDefaultOptions(), defaultConfig);

export default GroupedBar;
