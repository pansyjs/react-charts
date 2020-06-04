import React, { MutableRefObject, forwardRef, useEffect, useImperativeHandle } from 'react';
import { WordCloud as G2WordCloud, WordCloudConfig } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface WordCloudProps extends WordCloudConfig {
  chartRef?: MutableRefObject<G2WordCloud | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<WordCloudProps> = {
  forceFit: true
};

const WordCloud = forwardRef((props: WordCloudProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2WordCloud, WordCloudProps>(G2WordCloud, rest);

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

WordCloud.defaultProps = defaultConfig;

export default WordCloud;
