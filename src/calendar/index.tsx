import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Calendar as G2Calendar, CalendarConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface CalendarProps extends CalendarConfig {
  chartRef?: MutableRefObject<G2Calendar | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<CalendarProps> = {
  forceFit: true
};

const Calendar = forwardRef((props: CalendarProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Calendar, CalendarProps>(G2Calendar, rest);

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

Calendar.defaultProps = deepMix({}, G2Calendar.getDefaultOptions(), defaultConfig);

export default Calendar;
