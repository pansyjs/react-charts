import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { DualAxes as G2plotDualAxes, DualAxesOptions as G2plotProps } from '@antv/g2plot';
import useChart, { ContainerProps } from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';
import ChartLoading from '../common/utils/create-loading';

export interface DualAxesConfig extends G2plotProps, ContainerProps {
  chartRef?: React.MutableRefObject<G2plotDualAxes | undefined>;
}

const DualAxesChart = forwardRef((props: DualAxesConfig, ref) => {
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
  const { chart, container } = useChart<G2plotDualAxes, DualAxesConfig>(G2plotDualAxes, rest);

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

export default DualAxesChart;
