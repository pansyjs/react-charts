import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  RingProgress as G2plotRingProgress,
  RingProgressOptions as G2plotProps
} from '@antv/g2plot';
import useChart, { ContainerProps } from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';
import ChartLoading from '../common/utils/create-loading';

export interface RingProgressConfig extends G2plotProps, ContainerProps {
  chartRef?: React.MutableRefObject<G2plotRingProgress | undefined>;
}

const RingProgressChart = forwardRef((props: RingProgressConfig, ref) => {
  const {
    chartRef,
    style = {
      height: '100%'
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2plotRingProgress, RingProgressConfig>(
    G2plotRingProgress,
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
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default RingProgressChart;
